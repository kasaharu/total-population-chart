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
    const legendWidth = 100;

    const svg = d3
      .select('#line-chart')
      .append('svg')
      .attr('width', width + legendWidth)
      .attr('height', height + 50);

    const xScale = d3.scaleLinear().domain([1960, 2045]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 7500000]).range([height, 0]);
    const line = d3
      .line<PerYear>()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.value));

    svg.append('path').attr('d', line(data)).attr('fill', 'none').attr('stroke', 'blue').attr('transform', `translate(${legendWidth}, 0)`);

    // 凡例
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    svg.append('g').attr('transform', `translate(${legendWidth}, ${height})`).call(xAxis);
    svg.append('g').attr('transform', `translate(${legendWidth}, 0)`).call(yAxis);
  }
}
