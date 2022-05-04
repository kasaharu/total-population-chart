import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { dummyTotalPopulation, PerYear } from '../../../../domain/population-composition';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  totalPopulation = [...dummyTotalPopulation];

  ngOnInit(): void {
    this.drawLine(this.totalPopulation);
  }

  drawLine(data: PerYear[]): void {
    const width = 500;
    const height = 500;
    const axisWidth = 100;

    const svg = d3
      .select('#line-chart')
      .append('svg')
      .attr('width', width + axisWidth)
      .attr('height', height + 50);

    const xScale = d3.scaleLinear().domain(this.xDomain(data)).range([0, width]);
    const yScale = d3.scaleLinear().domain(this.yDomain(data)).range([height, 0]);
    const line = d3
      .line<PerYear>()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.value));

    svg.append('path').attr('d', line(data)).attr('fill', 'none').attr('stroke', 'blue').attr('transform', `translate(${axisWidth}, 0)`);

    // NOTE: 軸の描画
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    svg.append('g').attr('transform', `translate(${axisWidth}, ${height})`).call(xAxis);
    svg.append('g').attr('transform', `translate(${axisWidth}, 0)`).call(yAxis);
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
