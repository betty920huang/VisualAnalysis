function load_Chord_diagram(matrix,iter){

var values=[];
  $('.list-group-item').each(function() { 
    values.push($(this).context.innerText);           
  });

var professors;
var fill;
var faculty;
var facultyColor;

if(window.dataset =='Dalhousie'){
  faculty=['Computer Science','Mathematics','Psychology'];
  facultyColor={'Computer Science':'#D9D9D9','Mathematics':'#FF7F00','Psychology':'#FFFF33'};

 professors=['Andrew Rau-Chaplin','Marek Lipczak',"Meng He",
"Thomas Trappenberg","Nur Zincir-Heywood","Bonnie MacKay",'Derek Reilly',
'Dirk V. Arnold',"Rob Beiko","Vlado Keselj","Peter Selinger","Gordon A. Fenton",'Jason Brown','Robert Milson',
"KF Taylor","Peter LeFanu Lumsdaine","Richard Nowakowski","Jeannette Janssen",'David Iron','Theodore Kolokolnikov',
"Cameron Hassall","Sean P Barrett","Aaron J Newman","John Barresi",'Christine T. Chambers','Jason Satel',
"Greg H MacLean","Mark Petter","Patrick J. McGrath","Simon B. Sherry"];
  if(window.ShowClass=='real'){
   fill = d3.scale.ordinal()
      .domain(d3.range(30))
      .range(["#D9D9D9","#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9","#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00","#FF7F00", "#FF7F00",
        "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33"]);
    }
  if(window.ShowClass=='classified'){

    if(iter == 0){
      fill = d3.scale.ordinal()
      .domain(d3.range(30))
      .range(["#D9D9D9","#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9","#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00","#FF7F00", "#FF7F00",
        "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33"]);
  
    }
    if(iter == 1){
      fill = d3.scale.ordinal()
      .domain(d3.range(30))
      .range(["#D9D9D9","#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9","#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00","#FF7F00", "#FF7F00",
        "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33"]);
  
    }
    if(iter == 2){
      fill = d3.scale.ordinal()
      .domain(d3.range(30))
      .range(["#D9D9D9","#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9","#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00","#FF7F00", "#FF7F00",
        "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33"]);
  
    }
    if(iter == 3){
      fill = d3.scale.ordinal()
      .domain(d3.range(30))
      .range(["#D9D9D9","#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9","#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00","#FF7F00", "#FF7F00",
        "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33"]);
  
    }
    if(iter == 4){
      fill = d3.scale.ordinal()
      .domain(d3.range(30))
      .range(["#D9D9D9","#D9D9D9", "#D9D9D9", "#FFFF33", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9","#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00","#FF7F00", "#FF7F00",
        "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33"]);
  
    }
    if(iter == 5){
      fill = d3.scale.ordinal()
      .domain(d3.range(30))
      .range(["#D9D9D9","#D9D9D9", "#D9D9D9", "#FFFF33", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9","#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00","#FF7F00", "#FF7F00",
        "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33"]);
  
    }
    if(iter == 6){
      fill = d3.scale.ordinal()
      .domain(d3.range(30))
      .range(["#D9D9D9","#D9D9D9", "#D9D9D9", "#FFFF33", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9","#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00","#FF7F00", "#FF7F00",
        "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33"]);
  
    }
    if(iter == 7){
      fill = d3.scale.ordinal()
      .domain(d3.range(30))
      .range(["#D9D9D9","#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9","#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00","#FF7F00", "#FF7F00",
        "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33", "#FFFF33"]);
  
    }

  }
}
if(window.dataset == 'Stanford'){
  faculty=['Business','Computer Science','Education','Engineering','Law','Medicine','Physics','Psychology'];
  facultyColor={'Business':'#D9D9D9','Computer Science':'#FF7F00','Education':'#FFFF33','Engineering':'#E55722','Law':'#8CBF42','Medicine':'#305666','Physics':'#c96fb7','Psychology':'#239DE7'};

  professors=[
'Jonathan Levav','Charles I. Jones','Andrzej (Andy) Skrzypacz','Jules van Binsbergen','Michael Ostrovsky','Keith Krehbiel','Ilya A Strebulaev','John William Hatfield','William Sharpe','Harikesh S. Nair','Christopher D Manning','Alex Aiken','Daphne Koller','hector garcia-molina','Mark Horowitz','Gio Wiederhold','Marc Levoy','Philip Levis','Kunle Olukotun','Nils Nilsson',
'Bernd Girod','John Ousterhout','Dan Boneh','Ronald Fedkiw','Jure Leskovec','Li Fei-Fei','David Dill','Jeffrey Ullman','Mehran Sahami','Jennifer Widom','Margaret Irving','Amado M. Padilla','Michael Pope','sean f. reardon','Daniel McFarland','David Labaree','Lee S. Shulman','Eric Bettinger','Seok Woo Lee','Ayfer Ozgur',
'Alberto Salleo','Richard G. Luthy','Yinyu Ye','Samson Tu','Eduardo Miranda','Wei Cai','Stuart Rojstaczer','Eckart Meiburg','Victor Pereyra','Yinyu Ye','Mark Ruzon','Sachin Katti','Kwanpyo Kim','Andrea Goldsmith','Abbas El Gamal','Joseph M. Kahn','Kevin Reil','Xiaolin ZHENG','Mark Horowitz','Elizabeth Owen Bratt',
'Jennifer Wilcox','Victor Pereyra','John Pauly','Raymond G Sierra','Charbel Farhat','Robert M Gray','Stephen Boyd','Martin Reinhard','H.-S. Philip Wong','Jack W Baker','stephen monismith','FM Orr','Jay B. Jeffries','Dimitry Gorinevsky','Bernd Girod','Benjamin Chee-Keong Tee','Tsachy Weissman','Stephen E. Richardson','Kenneth E. Goodson','Riitta Katila',
'Ellen Kuhl','Aitzol Garcia-Etxarri','Kay Giesecke','Adam Brandt','Jennifer Wilcox','Krishna Shenoy','Andrea Montanari','Gurmeet Manku','Juan G. Santiago','Eric Pop','Alexander R. Dunn','Alexandria Boehm','Craig Criddle','sl delp','Beth L. Pruitt','Allison Okamura','William Dally','Dennis R. Carter','Brenda Simon','Peter Conti-Brown',
'Mark Lemley','F. Scott Kieff','Jacob S. Sherkow','Omer Tene','Stefania Fusco','Sam Saunders','Barbara van Schewick','Emily R. Murphy','Craig Lowe','Jay Bhattacharya','Adam Ivan Daoud','Robert Ahrends','Kaustubh Supekar','David Rehkopf','John P. A. Ioannidis','Michael Ostacher','Sanjay Basu, MD','Mintu Turakhia MD MAS','Thomas Vierbuchen','Demir Akin',
'Alexander A Morgan','George E Duran','Eran Bendavid','Hai Chuck Zhang','Dean Felsher','Adrienne Heinz','Gio Wiederhold','Amir Horowitz','Jun Li','Elisabeth Bik','S&uuml;nje Johanna Pamp','bin chen','Themistocles (Tim) L. Assimes','Jennifer L Zamanian','Ash A. Alizadeh','Magdalena Bazalova','Gordon O Matheson','Nigam Shah','Keiichi Kodama','Atul J. Butte',
'Vinod Menon','Song Liu','Robert Shafer','Jerome Yesavage','F. Stanford Massie Jr.','A. C. Del Re','Richard Moss','Douglas Brutlag','Andrea Wills','Ahmad Salehi','Despina G. Contopoulos-Ioannidis','Alesha B. Castillo','Ming-Chih Kao','Yannick Pouliot','Allison Kurian','Euan Ashley','Julie A. Theriot','Lucina Q. Uddin','Risa Wechsler','Shamit Kachru',
'Edgar A. Peralta','Mark J. Hogan','Thaddeus D. Ladd','Phil Marshall','Kevin Reil','Jie Wu','Tom Abel','Clayton Otey','Robert L. Byer','Magdalena Bazalova','Nicole Ackerman','Erhan Yenilmez','Inna Vishik','David Goldhaber-Gordon','Thomas Babinec','Douglas Stanford','Eden Rephaeli','Steven Block','Lera Boroditsky','Hazel Markus',
'Beno&icirc;t Monin','Brian Knutson','Robb Willer','James J. Gross','Anthony M. Norcia','Jeanne Tsai','Samuel McClure','James L. McClelland'];


if(window.ShowClass=='real'){
   fill = d3.scale.ordinal()
    .domain(d3.range(188))
    .range(['#D9D9D9',
'#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#E55722','#E55722','#E55722',
'#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722',
'#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722',
'#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#8CBF42','#8CBF42','#8CBF42','#8CBF42','#8CBF42','#8CBF42','#8CBF42','#8CBF42','#8CBF42','#8CBF42','#305666','#305666','#305666',
'#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#c96fb7','#c96fb7','#c96fb7',
'#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7',
'#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7','#239DE7']);

}
  if(window.ShowClass=='classified'){

    if(iter == 0){
      fill = d3.scale.ordinal()
      .domain(d3.range(188))
      .range(['#D9D9D9','#D9D9D9','#D9D9D9','#E55722','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#E55722','#FF7F00','#FF7F00','#305666','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#239DE7','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#E55722','#E55722',
'#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#c96fb7','#E55722','#305666','#c96fb7','#E55722','#E55722','#E55722',
'#E55722','#E55722','#E55722','#c96fb7','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#FF7F00','#E55722','#E55722','#E55722','#c96fb7','#E55722',
'#E55722','#E55722','#E55722','#E55722','#E55722','#239DE7','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#305666','#305666','#E55722','#E55722','#E55722','#E55722','#8CBF42','#8CBF42',
'#8CBF42','#8CBF42','#305666','#8CBF42','#8CBF42','#305666','#8CBF42','#8CBF42','#305666','#305666','#305666','#E55722','#305666','#305666','#305666','#E55722','#305666','#305666','#305666','#E55722',
'#305666','#305666','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#c96fb7','#305666','#305666','#305666','#305666',
'#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#c96fb7','#c96fb7',
'#E55722','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#E55722','#E55722','#c96fb7','#c96fb7','#E55722','#c96fb7','#239DE7','#239DE7',
'#239DE7','#239DE7','#239DE7','#305666','#239DE7','#239DE7','#239DE7','#239DE7']);
  
    }
    if(iter == 1){
      fill = d3.scale.ordinal()
      .domain(d3.range(188))
      .range(['#D9D9D9','#305666','#D9D9D9','#E55722','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#239DE7','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#c96fb7','#FF7F00','#239DE7','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#E55722','#E55722',
'#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#c96fb7','#E55722','#E55722','#c96fb7','#E55722','#FF7F00','#E55722',
'#E55722','#E55722','#E55722','#c96fb7','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#c96fb7','#E55722','#FF7F00','#E55722','#E55722','#FF7F00','#E55722','#E55722',
'#E55722','#c96fb7','#8CBF42','#E55722','#E55722','#305666','#E55722','#E55722','#E55722','#E55722','#c96fb7','#E55722','#305666','#305666','#E55722','#E55722','#FF7F00','#E55722','#8CBF42','#8CBF42',
'#8CBF42','#8CBF42','#305666','#8CBF42','#8CBF42','#E55722','#8CBF42','#305666','#E55722','#305666','#305666','#c96fb7','#305666','#239DE7','#305666','#E55722','#305666','#305666','#305666','#E55722',
'#305666','#305666','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#c96fb7','#305666','#FF7F00','#305666','#305666',
'#305666','#305666','#305666','#305666','#FFFF33','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#c96fb7','#c96fb7',
'#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#239DE7','#239DE7',
'#239DE7','#239DE7','#239DE7','#305666','#239DE7','#239DE7','#239DE7','#239DE7']);
  
    }
    if(iter == 2){
       fill = d3.scale.ordinal()
      .domain(d3.range(188))
      .range(['#D9D9D9','#305666','#D9D9D9','#E55722','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#239DE7','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#c96fb7','#E55722','#239DE7','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#E55722','#E55722',
'#E55722','#E55722','#FF7F00','#FF7F00','#E55722','#E55722','#E55722','#c96fb7','#E55722','#E55722','#c96fb7','#E55722','#c96fb7','#E55722','#E55722','#E55722','#c96fb7','#E55722','#FF7F00','#E55722',
'#E55722','#E55722','#E55722','#c96fb7','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#c96fb7','#E55722','#c96fb7','#E55722','#FF7F00','#E55722','#E55722','#FF7F00','#E55722','#FFFF33',
'#E55722','#c96fb7','#D9D9D9','#E55722','#E55722','#305666','#E55722','#FF7F00','#E55722','#E55722','#c96fb7','#305666','#305666','#305666','#E55722','#E55722','#FF7F00','#E55722','#8CBF42','#8CBF42',
'#8CBF42','#8CBF42','#305666','#FF7F00','#8CBF42','#305666','#8CBF42','#305666','#305666','#305666','#305666','#E55722','#FF7F00','#239DE7','#305666','#E55722','#305666','#305666','#305666','#E55722',
'#305666','#305666','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#c96fb7','#305666','#FF7F00','#305666','#305666',
'#FF7F00','#305666','#305666','#305666','#FFFF33','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#239DE7','#305666','#305666','#305666','#305666','#305666','#c96fb7','#c96fb7',
'#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#c96fb7','#E55722','#c96fb7','#c96fb7','#E55722','#239DE7','#239DE7',
'#239DE7','#305666','#239DE7','#305666','#305666','#239DE7','#239DE7','#239DE7']);
    }
    if(iter == 3){
      fill = d3.scale.ordinal()
      .domain(d3.range(188))
      .range(['#239DE7','#305666','#D9D9D9','#E55722','#FF7F00','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#239DE7','#FF7F00','#8CBF42','#FF7F00','#FF7F00','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#c96fb7','#FF7F00','#FF7F00','#8CBF42','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#E55722','#E55722',
'#E55722','#E55722','#FF7F00','#FF7F00','#E55722','#E55722','#E55722','#c96fb7','#FFFF33','#E55722','#c96fb7','#E55722','#c96fb7','#c96fb7','#E55722','#E55722','#c96fb7','#E55722','#FF7F00','#E55722',
'#E55722','#FFFF33','#c96fb7','#c96fb7','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#c96fb7','#E55722','#FF7F00','#305666','#FF7F00','#FF7F00','#c96fb7','#FFFF33',
'#E55722','#c96fb7','#D9D9D9','#E55722','#E55722','#305666','#FF7F00','#FF7F00','#E55722','#E55722','#E55722','#305666','#305666','#305666','#E55722','#E55722','#FF7F00','#E55722','#8CBF42','#8CBF42',
'#8CBF42','#8CBF42','#305666','#FF7F00','#8CBF42','#305666','#8CBF42','#305666','#305666','#305666','#305666','#E55722','#FF7F00','#FFFF33','#305666','#E55722','#305666','#305666','#305666','#E55722',
'#305666','#305666','#305666','#305666','#305666','#305666','#8CBF42','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#c96fb7','#305666','#FF7F00','#305666','#305666',
'#FF7F00','#305666','#305666','#305666','#FFFF33','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#c96fb7','#c96fb7',
'#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#c96fb7','#239DE7','#FFFF33',
'#239DE7','#305666','#FFFF33','#305666','#305666','#239DE7','#239DE7','#239DE7']);
    }
    if(iter == 4){
       fill = d3.scale.ordinal()
      .domain(d3.range(188))
      .range([
'#FFFF33','#305666','#D9D9D9','#E55722','#FF7F00','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FF7F00','#8CBF42','#FF7F00','#E55722','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#E55722','#FF7F00','#FF7F00','#305666','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#E55722','#E55722',
'#E55722','#E55722','#FF7F00','#FF7F00','#E55722','#E55722','#E55722','#c96fb7','#FF7F00','#E55722','#c96fb7','#FF7F00','#E55722','#E55722','#FF7F00','#E55722','#c96fb7','#E55722','#FF7F00','#FF7F00',
'#E55722','#FF7F00','#c96fb7','#c96fb7','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#E55722','#c96fb7','#FF7F00','#FF7F00','#305666','#E55722','#FF7F00','#c96fb7','#FFFF33',
'#305666','#c96fb7','#D9D9D9','#E55722','#E55722','#305666','#FF7F00','#FF7F00','#E55722','#E55722','#E55722','#305666','#E55722','#305666','#E55722','#E55722','#FF7F00','#305666','#8CBF42','#8CBF42',
'#8CBF42','#8CBF42','#305666','#FF7F00','#8CBF42','#305666','#8CBF42','#305666','#305666','#305666','#305666','#E55722','#FF7F00','#FFFF33','#305666','#E55722','#305666','#305666','#305666','#E55722',
'#305666','#305666','#305666','#305666','#305666','#305666','#8CBF42','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#c96fb7','#305666','#FF7F00','#305666','#305666',
'#FF7F00','#305666','#305666','#305666','#FFFF33','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#c96fb7','#c96fb7',
'#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#E55722','#239DE7','#239DE7',
'#239DE7','#305666','#239DE7','#305666','#239DE7','#239DE7','#239DE7','#239DE7']);
    }
    if(iter == 5){
      fill = d3.scale.ordinal()
      .domain(d3.range(188))
      .range([
'#239DE7','#305666','#D9D9D9','#E55722','#FF7F00','#D9D9D9','#D9D9D9','#FFFF33','#D9D9D9','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FF7F00','#8CBF42','#FF7F00','#E55722','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#E55722','#FF7F00','#239DE7','#305666','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#E55722','#E55722',
'#E55722','#E55722','#FF7F00','#FF7F00','#E55722','#c96fb7','#E55722','#E55722','#E55722','#E55722','#c96fb7','#FF7F00','#c96fb7','#E55722','#FF7F00','#E55722','#c96fb7','#E55722','#FF7F00','#FF7F00',
'#E55722','#E55722','#c96fb7','#c96fb7','#E55722','#E55722','#FF7F00','#E55722','#E55722','#E55722','#E55722','#E55722','#c96fb7','#FF7F00','#FF7F00','#305666','#FF7F00','#FF7F00','#c96fb7','#FFFF33',
'#305666','#c96fb7','#D9D9D9','#E55722','#E55722','#305666','#FF7F00','#FF7F00','#E55722','#E55722','#E55722','#305666','#E55722','#305666','#E55722','#E55722','#FF7F00','#305666','#8CBF42','#8CBF42',
'#8CBF42','#8CBF42','#305666','#FF7F00','#8CBF42','#305666','#8CBF42','#305666','#305666','#305666','#305666','#c96fb7','#FF7F00','#FFFF33','#305666','#E55722','#305666','#305666','#305666','#E55722',
'#305666','#305666','#305666','#305666','#305666','#305666','#8CBF42','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#c96fb7','#305666','#FF7F00','#305666','#305666',
'#FF7F00','#305666','#305666','#305666','#FFFF33','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#c96fb7','#c96fb7',
'#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#305666','#239DE7','#FFFF33',
'#239DE7','#305666','#FFFF33','#305666','#239DE7','#239DE7','#305666','#239DE7']);
    }
    if(iter == 6){
       fill = d3.scale.ordinal()
      .domain(d3.range(188))
      .range([
'#239DE7','#305666','#D9D9D9','#D9D9D9','#239DE7','#D9D9D9','#D9D9D9','#FFFF33','#D9D9D9','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FF7F00','#8CBF42','#FF7F00','#E55722','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#E55722','#FF7F00','#239DE7','#305666','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#D9D9D9','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#E55722','#E55722',
'#E55722','#E55722','#FF7F00','#FF7F00','#E55722','#c96fb7','#E55722','#E55722','#E55722','#E55722','#c96fb7','#FF7F00','#E55722','#c96fb7','#FF7F00','#E55722','#c96fb7','#E55722','#FF7F00','#FF7F00',
'#E55722','#E55722','#c96fb7','#c96fb7','#E55722','#E55722','#FF7F00','#E55722','#E55722','#E55722','#E55722','#E55722','#c96fb7','#FF7F00','#FF7F00','#E55722','#E55722','#FF7F00','#c96fb7','#FFFF33',
'#305666','#c96fb7','#D9D9D9','#E55722','#E55722','#305666','#E55722','#FF7F00','#E55722','#c96fb7','#E55722','#305666','#305666','#305666','#E55722','#E55722','#FF7F00','#305666','#8CBF42','#8CBF42',
'#8CBF42','#8CBF42','#305666','#FF7F00','#8CBF42','#305666','#8CBF42','#305666','#305666','#305666','#305666','#c96fb7','#FF7F00','#FFFF33','#305666','#E55722','#305666','#305666','#305666','#E55722',
'#305666','#305666','#305666','#305666','#305666','#305666','#8CBF42','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#c96fb7','#305666','#FF7F00','#305666','#305666',
'#FF7F00','#305666','#305666','#305666','#FFFF33','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#c96fb7','#c96fb7',
'#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#E55722','#c96fb7','#305666','#239DE7','#FFFF33',
'#FFFF33','#305666','#FFFF33','#305666','#305666','#239DE7','#305666','#239DE7']);
    }
    if(iter == 7){
       fill = d3.scale.ordinal()
      .domain(d3.range(188))
      .range([
'#239DE7','#305666','#D9D9D9','#D9D9D9','#FFFF33','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#FF7F00','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FF7F00','#8CBF42','#FF7F00','#E55722','#FF7F00','#FF7F00',
'#FF7F00','#FF7F00','#FF7F00','#E55722','#FF7F00','#FF7F00','#E55722','#FF7F00','#FF7F00','#FF7F00','#FFFF33','#FFFF33','#305666','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#FFFF33','#E55722','#E55722',
'#E55722','#E55722','#FF7F00','#FF7F00','#E55722','#c96fb7','#FFFF33','#E55722','#E55722','#E55722','#c96fb7','#FF7F00','#E55722','#E55722','#FF7F00','#E55722','#E55722','#E55722','#FF7F00','#FF7F00',
'#E55722','#E55722','#c96fb7','#c96fb7','#E55722','#E55722','#FF7F00','#E55722','#E55722','#E55722','#E55722','#E55722','#c96fb7','#FF7F00','#FF7F00','#E55722','#E55722','#FF7F00','#E55722','#FFFF33',
'#305666','#c96fb7','#D9D9D9','#E55722','#E55722','#305666','#FF7F00','#FF7F00','#E55722','#c96fb7','#E55722','#305666','#E55722','#305666','#E55722','#E55722','#FF7F00','#E55722','#8CBF42','#8CBF42',
'#8CBF42','#8CBF42','#305666','#FF7F00','#8CBF42','#305666','#D9D9D9','#305666','#305666','#305666','#305666','#c96fb7','#FF7F00','#FFFF33','#305666','#E55722','#305666','#305666','#305666','#E55722',
'#305666','#305666','#305666','#305666','#305666','#305666','#8CBF42','#305666','#305666','#305666','#305666','#FF7F00','#305666','#305666','#305666','#E55722','#305666','#FF7F00','#305666','#305666',
'#FF7F00','#305666','#305666','#305666','#FFFF33','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#305666','#c96fb7','#c96fb7',
'#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#E55722','#c96fb7','#E55722','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#c96fb7','#305666','#239DE7','#239DE7',
'#FFFF33','#305666','#FFFF33','#305666','#305666','#239DE7','#305666','#239DE7']);
    }

  }

}


var prof_map = new HashMap();
var prof_color = new HashMap();  // replace fill
for (var prof_i =0; prof_i<professors.length ; prof_i++){
   // console.log("key"+professors[prof_i]+" "+prof_i);
   prof_map.put(professors[prof_i],prof_i);

}
console.log(prof_map.keys());
var prof_index=[];
for (var prof in values){
  prof_index.push(prof_map.get(values[prof]));
}
//console.log(prof_index);

for (var sort_i = 0; sort_i < prof_index.length; sort_i++) {
  for (var sort_j = sort_i+1; sort_j<prof_index.length;sort_j++) {
      if(prof_index[sort_i] > prof_index[sort_j]){
        var tmp = prof_index[sort_i];
        prof_index[sort_i] = prof_index[sort_j];
        prof_index[sort_j]= tmp;
      }
  };
};
console.log(prof_index);
var dal_dynamic_matrix=[];
for (var dal_i in prof_index)
{
  var dal_dynamic_matrix_row=[];
  for(var dal_j in prof_index)
  {
    dal_dynamic_matrix_row.push(matrix[prof_index[dal_i]][prof_index[dal_j]]);
  }
  dal_dynamic_matrix.push(dal_dynamic_matrix_row);
}
console.log(dal_dynamic_matrix);


var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 5])
  .html(function(d) {
    return"<span>Researcher <strong>" + professors[prof_index[d.source.index]] +"</strong> and Researcher <strong>"+ professors[prof_index[d.target.index]] + "</strong> have : "+ matrix[prof_index[d.source.index]][prof_index[d.target.index]] +" common interest tags.</span>";
  })

var chord = d3.layout.chord()
    .padding(.05)
    .matrix(dal_dynamic_matrix);

var width_chord = 800,
    height_chord = 500,
    innerRadius = Math.min(width_chord, height_chord) * .3,
    outerRadius = innerRadius * 1.1;


var svg_chord_existance = d3.select('#svg_chord');
if(!svg_chord_existance.empty())
{
  d3.select("#svg_chord").remove();
}

var svg_chord = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 800)
    .attr("id","svg_chord")
    .append("g")
    .attr("transform", "translate(300, 250)");

svg_chord.call(tip);

svg_chord.append("g").selectAll("path")
    .data(chord.groups)
  .enter().append("path")
    .style("fill", function(d) {
     // console.log(professors[d.index]);
      console.log(prof_index[d.index]);
      return fill(prof_index[d.index]); 
    })
    .style("stroke", function(d) {  
      return fill(prof_index[d.index]);
    })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1));



var ticks = svg_chord.append("g")
.selectAll("g")
.data(chord.groups)
.enter().append("g")
ticks.append("text")
.each(function(d) {
    d.angle = (d.startAngle + d.endAngle) / 2;
})
.attr("dy", ".35em")
.attr("text-anchor", function(d) {
    return d.angle > Math.PI ? "end" : null;
})
.attr("transform", function(d) {
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
    + "translate(" + (innerRadius + 45) + ")"
    + (d.angle > Math.PI ? "rotate(180)" : "");
})
.text(function(d) {
    return professors[prof_index[d.index]];
})
.style("fill","black")
.on("mouseover", fade(.1))
.on("mouseout", fade(1));


svg_chord.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("fill", function(d) { 
    console.log(d.source);
    prof_index[d.index]
    color_1 = $.Color(fill(prof_index[d.source.index]));
    color_2 = $.Color(fill(prof_index[d.target.index])); 
    return Color_mixer.mix(color_1,color_2); })
    .style("opacity", 1)
    .on("mouseover",tip.show)
    .on('mouseout', tip.hide);

var legend = svg_chord.selectAll(".legend")
      .data(faculty)
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(25," + (10+i * 20)+ ")"; });

  legend.append("rect")
      .attr("x", 300 )
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function(d){  return facultyColor[d];});

  legend.append("text")
      .attr("x", 450)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .style("fill","black")
      .text(function(d) { return d; });
// Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(g, i) {
    svg_chord.selectAll(".chord path")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
        .style("opacity", opacity);
  };
}


}
