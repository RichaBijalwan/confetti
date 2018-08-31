var Particles = function(rootElement){
  var xmlns = 'http://www.w3.org/2000/svg';
  
  function createSvg(wd, ht, speed){
    var svgel = document.createElementNS(xmlns, 'svg');

    svgel.setAttribute('width', wd);
    svgel.setAttribute('height', ht);
    svgel.setAttribute('class', 'particle');
    svgel.setAttribute('style', '--speed: '+speed);

    return svgel;
  }
  
  function createTriangle(wd, ht, speed, col){
    var ele, svgel = createSvg(wd, ht, speed),
        points = ''+0+','+ht+' '+(wd/2)+','+0+' '+wd+','+ht;

    ele = document.createElementNS(xmlns, 'polygon');
    ele.setAttribute('points', points);
    ele.setAttribute('fill', col);
    svgel.appendChild(ele);

    rootElement.appendChild(svgel);
  }

  function createRect(wd, ht, speed, col){
    var ele, svgel = createSvg(wd, ht*2, speed);

    ele = document.createElementNS(xmlns, 'rect');
    ele.setAttribute('width', wd);
    ele.setAttribute('height', ht*2);
    ele.setAttribute('fill', col);
    
    svgel.appendChild(ele);
    rootElement.appendChild(svgel);
  }

  function createPlus(wd, speed, col){
    var ele, svgel = createSvg(wd, wd, speed),
        th = Math.floor(wd/3);

    ele = document.createElementNS(xmlns, 'rect');
    ele.setAttribute('x', th);
    ele.setAttribute('y', 0);
    ele.setAttribute('width', th);
    ele.setAttribute('height', th*3);
    ele.setAttribute('fill', col);
    svgel.appendChild(ele);

    ele = document.createElementNS(xmlns, 'rect');
    ele.setAttribute('x', 0);
    ele.setAttribute('y', th);
    ele.setAttribute('width', th*3);
    ele.setAttribute('height', th);
    ele.setAttribute('fill', col);
    svgel.appendChild(ele);

    rootElement.appendChild(svgel);
  }

  function createFlakes(wd, speed, col){
    var ele, points, svgel = createSvg(wd, wd, speed),
        th = Math.floor(wd/3);

    ele = document.createElementNS(xmlns, 'rect');
    ele.setAttribute('x', (5*th)/4);
    ele.setAttribute('y', 0);
    ele.setAttribute('width', th/2);
    ele.setAttribute('height', th*3);
    ele.setAttribute('fill', col);
    svgel.appendChild(ele);

    ele = document.createElementNS(xmlns, 'rect');
    ele.setAttribute('y', (5*th)/4);
    ele.setAttribute('x', 0);
    ele.setAttribute('width', th*3);
    ele.setAttribute('height', th/2);
    ele.setAttribute('fill', col);
    svgel.appendChild(ele);

    points = ''+0+','+th/2+' '+(th/2)+','+0+' '+3*th+','+(5*th)/2+' '+(5*th)/2+','+3*th;
    ele = document.createElementNS(xmlns, 'polygon');
    ele.setAttribute('points', points);
    ele.setAttribute('fill', col);
    svgel.appendChild(ele);

    points = ''+0+','+(5*th)/2+' '+(5*th)/2+','+0+' '+3*th+','+th/2+' '+th/2+','+3*th;
    ele = document.createElementNS(xmlns, 'polygon');
    ele.setAttribute('points', points);
    ele.setAttribute('fill', col);
    svgel.appendChild(ele);

    rootElement.appendChild(svgel);
  }

  function createText(wd, ht, txtSize, speed, color, txt){
    var ele, svgel = createSvg(wd, ht, speed);

    ele = document.createElementNS(xmlns, 'text');
    ele.setAttribute('y', txtSize);
    ele.setAttribute('x', 0);
    ele.setAttribute('font-size',txtSize);
    ele.setAttribute('fill', color);
    ele.textContent = txt;
    svgel.appendChild(ele);

    rootElement.appendChild(svgel);
  }

  return {
    triangle: createTriangle,
    rectangle: createRect,
    plus: createPlus,
    flakes: createFlakes,
    word: createText
  }

};