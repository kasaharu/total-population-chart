import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { PerYear } from '../../../../domain/population-composition';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnChanges {
  @Input() populationComposition: PerYear[][] | null = null;
  svg!: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
  width = 500;
  height = 500;
  axisWidth = 100;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['populationComposition'].firstChange) {
      this.svg = d3
        .select('#line-chart')
        .append('svg')
        .attr('width', this.width + this.axisWidth)
        .attr('height', this.height + 50);
    }

    if (this.populationComposition !== null) {
      console.log(this.populationComposition);
      this.drawLine(this.populationComposition[0]);
    }
  }

  drawLine(data: PerYear[]): void {
    this.svg.selectAll('path').remove();
    this.svg.selectAll('g').remove();

    const xScale = d3.scaleLinear().domain(this.xDomain(data)).range([0, this.width]);
    const yScale = d3.scaleLinear().domain(this.yDomain(data)).range([this.height, 0]);
    const line = d3
      .line<PerYear>()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.value));

    this.svg
      .append('path')
      .attr('d', line(data))
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('transform', `translate(${this.axisWidth}, 0)`);

    // NOTE: 軸の描画
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    this.svg.append('g').attr('transform', `translate(${this.axisWidth}, ${this.height})`).call(xAxis);
    this.svg.append('g').attr('transform', `translate(${this.axisWidth}, 0)`).call(yAxis);
  }

  // NOTE: x 軸の範囲を決める
  xDomain(data: PerYear[]): number[] {
    const yearList = data.map((d) => d.year);
    const max = Math.max(...yearList);
    const min = Math.min(...yearList);

    return [min, max];
  }

  // NOTE: y 軸の範囲を決める
  yDomain(data: PerYear[]): number[] {
    const valueList = data.map((d) => d.value);
    const max = Math.max(...valueList);
    const digit = String(max).length;

    const signDigit = 10 ** (digit - 2);
    return [0, Math.round(max / signDigit) * signDigit + 5 * signDigit];
  }
}
