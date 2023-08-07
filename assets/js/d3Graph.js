function updateScaling() {
    const originalWidth = 928;                   // The original width of the SVG
    const originalHeight = 680;                  // The original height of the SVG
    const svg = document.getElementById('scaling-group');

    // Get the dimensions of the container
    const containerWidth = window.innerWidth;
    const containerHeight = originalHeight;
    // Update the viewBox attribute to match the container size
    svg.setAttribute('viewBox', `${-containerWidth/2} ${-containerHeight/2} ${containerWidth} ${containerHeight}`);
}


function createGraph(data) {

    // Reheat the simulation when drag starts, and fix the subject position.
    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    // Update the subject (dragged node) position during drag.
    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    // Restore the target alpha so the simulation cools after dragging ends.
    // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }
    
    // Specify the dimensions of the chart.
    const width = 928;
    const height = 680;

    // Specify the color scale.
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // The force simulation mutates links and nodes, so create a copy
    // so that re-evaluating this cell produces the same result.
    const links = data.links.map(d => ({...d}));
    const nodes = data.nodes.map(d => ({...d}));

    // Create a simulation with several forces.
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links)
            .id(d => d.id)
            .distance(250))
        .force("charge", d3.forceManyBody().strength(-1000))
        .force("x", d3.forceX())
        .force("y", d3.forceY());

    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("id", "scaling-group")
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("style", 'max-width: 100%; height: auto; font: 12px "Montserrat", sans-serif;');

    // Add a line for each link, and a circle for each node.
    const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value));

    const node = svg.append("g")
        .selectAll("g")
        .data(nodes)
        .join("g")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        )
        .on("click", function(event, d) {
            event.stopPropagation();
            if (d.hasOwnProperty("click")) {
                window.location.href = window.location.origin + d.click;
            } else {
                alert("You clicked: "  
                    + d.id 
                    + ", now decide what to do with this information "
                    + "(e.g., open page of topic, show publications for subtopics...)"
                );
            }
        });

    node.append("circle")
        .attr("r", d => d.radius)
        .attr("fill", d => color(d.group));
        // .attr("stroke", "white")
        // .attr("stroke-width", 1.5)

    node.append("text")
        .attr("x", d => (d.radius+5))
        .attr("y", "0.31em")
        .text(d => d.id)
        .clone(true).lower()
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("font-family", '"Montserrat", sans-serif');

    node.append('use')
        .attr("x", d => (-d.radius/2))
        .attr("y", d => (-d.radius/2))
        .attr("width", d => (d.radius))
        .attr("height", d => (d.radius))
        .attr('xlink:href', d => ('/assets/svg/fontawesome-6.4.0/icons.svg#' + d.icon));

    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        node
            .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Append the SVG element.
    d3.select("#d3jsGraph").append(function(){return svg.node();});

    // Call the updateScaling function initially and on window resize
    window.addEventListener('resize', updateScaling);
    updateScaling();
}

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

fetch("/assets/json/d3Graph.json")
    .then(response => response.json())
    .then(json => createGraph(json));
