!function() {

   var operation = d3.select('body').append('div').append('h3');

   // Color palette from color brewer
   // "#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"
   data = 
      [  
      
         {  
          "key":"Egypt",
          "values":[  

            {axis:"Availibility: Skilled Educator",value:4},
            {axis:"Availibility: Infrastructure",value:5},
            {axis:"Availibility: Ressources Allocation",value:2},
            {axis:"Accessibility: Legal Barrier",value:2},
            {axis:"Accessibility: Policy",value:2},
            {axis:"Accessibility: Emis",value:2},
            {axis:"Accessibility: Advocacy",value:5},
            {axis:"Affordability: Economic Obstacle",value:5},
            {axis:"Affordability: Financial Support",value:5},
            {axis:"Acceptability: Country Support",value:3},
            {axis:"Acceptability: Language",value:5},
            {axis:"Appropriateness: Safe Environment",value:4},
            {axis:"Appropriateness: Quality Standards",value:3}
            ]
        },
        {  
          "key":"Iraq",
          "values":[  
            {axis:"Availibility: Skilled Educator",value:2},
            {axis:"Availibility: Infrastructure",value:2},
            {axis:"Availibility: Ressources Allocation",value:2},
            {axis:"Accessibility: Legal Barrier",value:4},
            {axis:"Accessibility: Policy",value:3},
            {axis:"Accessibility: Emis",value:1},
            {axis:"Accessibility: Advocacy",value:2},
            {axis:"Affordability: Economic Obstacle",value:3},
            {axis:"Affordability: Financial Support",value:3},
            {axis:"Acceptability: Country Support",value:1},
            {axis:"Acceptability: Language",value:1},
            {axis:"Appropriateness: Safe Environment",value:4},
            {axis:"Appropriateness: Quality Standards",value:2}
           ]
        },
        {  
          "key":"Jordan",
          "values":[  
            {axis:"Availibility: Skilled Educator",value:2},
            {axis:"Availibility: Infrastructure",value:2},
            {axis:"Availibility: Ressources Allocation",value:2},
            {axis:"Accessibility: Legal Barrier",value:1},
            {axis:"Accessibility: Policy",value:2},
            {axis:"Accessibility: Emis",value:1},
            {axis:"Accessibility: Advocacy",value:3},
            {axis:"Affordability: Economic Obstacle",value:2},
            {axis:"Affordability: Financial Support",value:3},
            {axis:"Acceptability: Country Support",value:3},
            {axis:"Acceptability: Language",value:2},
            {axis:"Appropriateness: Safe Environment",value:3},
            {axis:"Appropriateness: Quality Standards",value:3}
           ]
        },
        {  
          "key":"Lebanon",
          "values":[  
            {axis:"Availibility: Skilled Educator",value:4},
            {axis:"Availibility: Infrastructure",value:4},
            {axis:"Availibility: Ressources Allocation",value:3},
            {axis:"Accessibility: Legal Barrier",value:2},
            {axis:"Accessibility: Policy",value:4},
            {axis:"Accessibility: Emis",value:1},
            {axis:"Accessibility: Advocacy",value:4},
            {axis:"Affordability: Economic Obstacle",value:2},
            {axis:"Affordability: Financial Support",value:4},
            {axis:"Acceptability: Country Support",value:4},
            {axis:"Acceptability: Language",value:3},
            {axis:"Appropriateness: Safe Environment",value:1},
            {axis:"Appropriateness: Quality Standards",value:4}
          ]
        },
        {  
          "key":"Turkey",
          "values":[ 
            {axis:"Availibility: Skilled Educator",value:2}, 
            {axis:"Availibility: Infrastructure",value:2},
            {axis:"Availibility: Ressources Allocation",value:2},
            {axis:"Accessibility: Legal Barrier",value:4},
            {axis:"Accessibility: Policy",value:4},
            {axis:"Accessibility: Emis",value:2},
            {axis:"Accessibility: Advocacy",value:4},
            {axis:"Affordability: Economic Obstacle",value:4},
            {axis:"Affordability: Financial Support",value:2},
            {axis:"Acceptability: Country Support",value:2},
            {axis:"Acceptability: Language",value:2},
            {axis:"Appropriateness: Safe Environment",value:3},
            {axis:"Appropriateness: Quality Standards",value:2}
          ]
        }
      ];

    // Trying to get the index of my axis  
   console.log(radarChart.axes()); 
      
   setTimeout(function() { 
      operation.html('This is a radar chart. <br><small>It is a visual depiction of the characteristics of the Education sectors <br>within different countries hosting Syrian Refugeees.</small>');
      radarChart.options({'legend': {display: true}});
    //  radarChart.options({circles: {fill: 'white', color: '#FF99CC'}});
      radarChart.options({axes: {lineColor: "black"}});
      radarChart.options({'areas': {'dotRadius': 2}});
      radarChart.options({circles: {fill: '#CDCDCD', color: '#CDCDCD'}});
      radarChart.height(500).width(500).data(data).duration(1000).update();
   }, 100);
   
   
   setTimeout(function() { 
      operation.html(" Each country is represented through a color: this is Egypt ");
      var one = radarChart.slice(0, 1);      
      radarChart.height(550).width(550).data(one).colors({'Egypt': '#d7191c', 'Iraq': '#fdae61', 'Jordan': '#ffffbf', 'Lebanon': '#abd9e9', 'Turkey': '#2c7bb6'}).update();
   }, 5000);
   
   setTimeout(function() { 
      radarChart.data(data).update();      
   }, 8000);     
   setTimeout(function() { 
      operation.html(" ... Iraq ...");
      var one = radarChart.slice(1, 2);
      radarChart.data(one).update();
   }, 8100);
   

   setTimeout(function() { 
      radarChart.data(data).update();      
   }, 11000);     
   setTimeout(function() { 
      operation.html(" ... Jordan .. ");
      var one = radarChart.slice(2, 3);
      radarChart.data(one).update();
   }, 11100);
   
   
   
   setTimeout(function() { 
      radarChart.data(data).update();      
   }, 14000);     
   setTimeout(function() { 
      operation.html(" ... Lebanon ... ");
      var one = radarChart.slice(3, 4);
      radarChart.data(one).update();
   }, 14100);
   
   
   
   setTimeout(function() { 
      radarChart.data(data).update();      
   }, 17000);     
   setTimeout(function() { 
      operation.html(" ... and Turkey ");
      var one = radarChart.slice(4, 5);
      radarChart.data(one).update();
   }, 17100);

   
   
/*


    setTimeout(function() { 
      operation.html(" 1  ");
     // radarChart.filterAxes(4,5,7,8,9,10,11,12,13,14);
    //options({circles: {maxValue: 1, levels: 4}}).
     // radarChart.filterAxes['Availibility: Skilled Educator', 'Availibility: Infrastructure', 'Availibility: Ressources Allocation'];
    //  radarChart.filterAxes('7','8','9','10','11','12','12');  
      radarChart.filterAxes('Availibility: Skilled Educator'); 
      //Availibility
    //  radarChart.filterAxes(0);  //Availibility: Skilled Educator
    //  radarChart.filterAxes(1);  //Availibility: Infrastructure
   //   radarChart.filterAxes(2);  //Availibility: Ressources Allocation
   //   radarChart.filterAxes(3);  //Accessibility: Legal Barrier
   //   radarChart.filterAxes(4);  //Accessibility: Policy
   //   radarChart.filterAxes(5);  //Accessibility: Emis
   //   radarChart.filterAxes(6);  //Accessibility: Advocacy
   //   radarChart.filterAxes(7);  //Affordability
   //   radarChart.filterAxes(8);  //Affordability
   //   radarChart.filterAxes(9);  //Acceptability
   //   radarChart.filterAxes(10);  //Acceptability
   //   radarChart.filterAxes(11);  //Appropriateness
   //   radarChart.filterAxes(12);  //Appropriateness
   //   radarChart.data(data).update();   
   }, 2800);
    */
   
    setTimeout(function() { 
      operation.html("Availibility: National education frameworks advocate for availability of good quality education for all children up to a defined minimum age.<br ><small>Skilled Educator: Sufficiently approprietaly skilled and qualified educators are available<br >Infrastructure: Schools infrastructure are available<br >Ressources Allocation: Ressources allocation meet the education needs for all learners including refugees</small>"); 
      radarChart.filterAxes(3);  //Accessibility: Legal Barrier
      radarChart.filterAxes(4);  //Accessibility: Policy
      radarChart.filterAxes(5);  //Accessibility: Emis
      radarChart.filterAxes(6);  //Accessibility: Advocacy
      radarChart.filterAxes(7);  //Affordability
      radarChart.filterAxes(8);  //Affordability
      radarChart.filterAxes(9);  //Acceptability
      radarChart.filterAxes(10);  //Acceptability
      radarChart.filterAxes(11);  //Appropriateness
      radarChart.filterAxes(12);  //Appropriateness
      radarChart.height(500).width(500).data(data).update();   
   }, 20000);

   
   setTimeout(function() { 
      operation.html("");
      radarChart.filterAxes(3);  //Accessibility: Legal Barrier
      radarChart.filterAxes(4);  //Accessibility: Policy
      radarChart.filterAxes(5);  //Accessibility: Emis
      radarChart.filterAxes(6);  //Accessibility: Advocacy
      radarChart.filterAxes(7);  //Affordability
      radarChart.filterAxes(8);  //Affordability
      radarChart.filterAxes(9);  //Acceptability
      radarChart.filterAxes(10);  //Acceptability
      radarChart.filterAxes(11);  //Appropriateness
      radarChart.filterAxes(12);  //Appropriateness
      radarChart.data(data).update();   
   }, 24000);
   
    setTimeout(function() { 
      operation.html("Accessibility: Definition: Refugees are entitled to access services provided by national authorities.<br ><small> Legal_barrier: Refugees are allowed to register freely in any school without specific documentation. Documents such as certification and assessments of refugees are recognised<br >Policy: Refugee children concerns are included in national and sub national sector plans<br ><br >Emis: Refugee children concerns are included in national Education Management Information System (EMIS)<br >Advocacy: Advocacy for Development of specific, supportive policies on education for refugees is conducted</small>"); 
      radarChart.filterAxes(0);  //Availibility: Skilled Educator
      radarChart.filterAxes(1);  //Availibility: Infrastructure
      radarChart.filterAxes(2);  //Availibility: Ressources Allocation
      radarChart.filterAxes(7);  //Affordability
      radarChart.filterAxes(8);  //Affordability
      radarChart.filterAxes(9);  //Acceptability
      radarChart.filterAxes(10);  //Acceptability
      radarChart.filterAxes(11);  //Appropriateness
      radarChart.filterAxes(12);  //Appropriateness
      radarChart.data(data).update();   
   }, 24100);

   
   setTimeout(function() { 
      operation.html(""); 
      radarChart.filterAxes(0);  //Availibility: Skilled Educator
      radarChart.filterAxes(1);  //Availibility: Infrastructure
      radarChart.filterAxes(2);  //Availibility: Ressources Allocation
      radarChart.filterAxes(7);  //Affordability
      radarChart.filterAxes(8);  //Affordability
      radarChart.filterAxes(9);  //Acceptability
      radarChart.filterAxes(10);  //Acceptability
      radarChart.filterAxes(11);  //Appropriateness
      radarChart.filterAxes(12);  //Appropriateness
      radarChart.data(data).update();   
   }, 28000);
  
    setTimeout(function() { 
      operation.html("Affordability: Definition: Education services are free or provided at nominal, non-prohibitive costs at par with nationals.<br ><small>Economic Obstacle: Economic Obstacle to education: schools fees are affordable<br>Financial Support: Enhance targeted assistance for the most vulnerable is delivered through  conditional cash grants and other mechanisms<br></small> Acceptability: Definition: Education services meet the minimum expectations of refugees.<br ><small>Country Support: Host countries receive support to achieve relevant, culturally appropriate and quality curriculum for refugee<br> Language: Refugee Children benefit from language support for learners in context where curriculum transition includes a different language<br></small> Appropriateness: Definition: Education services are of adequate quality and in line with international standards.<br ><small>Safe Environment:Teacher training and up-grading courses on learner-centered, participatory and inclusive pedagogy are provided.<br >Quality Standards: Effective processes ensure education provision consistently meets international education quality standards</small>"); 
      radarChart.filterAxes(3);  //Accessibility: Legal Barrier
      radarChart.filterAxes(4);  //Accessibility: Policy
      radarChart.filterAxes(5);  //Accessibility: Emis
      radarChart.filterAxes(6);  //Accessibility: Advocacy
      radarChart.filterAxes(0);  //Availibility: Skilled Educator
      radarChart.filterAxes(1);  //Availibility: Infrastructure
      radarChart.filterAxes(2);  //Availibility: Ressources Allocation
      radarChart.data(data).update();   
   }, 28100);

   
   setTimeout(function() { 
      operation.html(""); 
      radarChart.filterAxes(3);  //Accessibility: Legal Barrier
      radarChart.filterAxes(4);  //Accessibility: Policy
      radarChart.filterAxes(5);  //Accessibility: Emis
      radarChart.filterAxes(6);  //Accessibility: Advocacy
      radarChart.filterAxes(0);  //Availibility: Skilled Educator
      radarChart.filterAxes(1);  //Availibility: Infrastructure
      radarChart.filterAxes(2);  //Availibility: Ressources Allocation
      radarChart.data(data).update();   
   }, 36000);

   setTimeout(function() { 
      operation.html(" You can now get your own insights!<br> <small> Hover on each layer or on the legend to highlight.</small>");
      radarChart.options({axes: {lineColor: "purple"}});
      radarChart.height(600).width(600).options({'areas': {'dotRadius': 2}}).colors({}).data(data).update();
   }, 36100);   
   
}();
