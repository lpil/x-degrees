'use strict';

const graph = new Springy.Graph();

const nodes = [
  "Adam",
  "Alex",
  "Alice",
  "Dan",
  "Day",
  "Fran",
  "Iris",
  "Jess",
  "Laurie",
  "Louis",
  "Mittens",
  "Nina",
  "Oleg",
  "Xtian",
];

const edges = [
  ["Adam", "Nina"],
  ["Alex", "Oleg"],
  ["Dan", "Iris"],
  ["Day", "Dan"],
  ["Day", "Iris"],
  ["Day", "Xtian"],
  ["Fran", "Nina"],
  ["Iris", "Louis"],
  ["Iris", "Nina"],
  ["Iris", "Xtian"],
  ["Laurie", "Xtian"],
  ["Louis", "Alice"],
  ["Mittens", "Louis"],
  ["Nina", "Alex"],
  ["Nina", "Fran"],
  ["Oleg", "Mittens"],
  ["Xtian", "Alex"],
  ["Xtian", "Jess"],
];

graph.addNodes.apply(graph, nodes);
graph.addEdges.apply(graph, edges.map(x => x.sort()));

$('canvas').springy({ graph: graph });
