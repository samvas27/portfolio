// EDIT THIS FILE to change portfolio content. Images live in assets/images/ .
window.PORTFOLIO = {
 name: 'Samuel Vasington', role: 'Mechanical Engineering · Design · Manufacturing',
 intro: "Hi, I'm Samuel Vasington—a master's and undergraduate mechanical engineering student at UPenn. Explore my portfolio featuring work from my clubs, courses, and personal projects.",
 about: ["Hi, I’m Samuel Vasington, a mechanical engineering student at the University of Pennsylvania graduating in May 2027. During the last four years, I've focused on advanced design for manufacturing, mechatronics, and product design in a variety of different environments. \
    Through this, I've developed my technical experience with 3D Modeling software (SolidWorks, Creo, Onshape), FEA for structural and flow simulations, and using Python and MATLAB to build equation-based dynamic models.","My professional interests are in mechatronics, DFM, and robotics. In my free time, I enjoy exploring new places, playing soccer, hiking, and watching sports on TV."],
 resume: 'Samuel Vasington Resume.pdf', linkedin: 'https://linkedin.com/in/samuel-vasington ',
 projects: [
 
     {id:'bb8',title:'BB8',category:'Course Work',year:'Spring 2026',subtitle:'Life-size mechanical and electrical BB-8 replica',description:["This was a group project in my junior year mechanical engineering lab designed to challenge us to build a mechanical/electrical product with a constrained budget and timeline.","I designed the outer shell panels, \
            assembly and interface with the cross-member rod; designed the counterweight to maximize rotational motion; created custom helical bevel gears for motor drive; and helped improve structural rigidity and stiffness of the main internal 3D printed component following initial fractures during testing."],
            images:["assets/images/bb8/main.jpeg", "assets/images/bb8/far.jpeg", 
                "assets/images/bb8/inside1.jpeg", "assets/images/bb8/inside.png", "assets/images/bb8/drive.mp4"]},
   
    
    {id:'whisker',title:'Whisker',category:'Penn Electric Racing',year:'2024–2025',subtitle:'Aerodynamic component for optimizing tire wake and rear-wing airflow',
            description:["I created an innovative aerodynamic component for the car that improves airflow around the tires to the rear wing, increasing rear-wing downforce by 35% for the 2024-2025 period. Using CFD simulations on Star CCM+,\
                 I tested different airfoils, positions, and angles to identify the best placement for maximizing our downforce and Cl/Cd ratio. The inner-wing structure was designed so the whisker could slot in and be secured to a mount bolted onto our chassis so that it was easily removable."],
                 images:["assets/images/whisker/whisker_2_edited.jpg", 
                    "assets/images/whisker/whisker_detailed.png", "assets/images/whisker/whisker_explode_front.png", 
                    "assets/images/whisker/whisker_slot.png", "assets/images/whisker/whisker_cfd.png", "assets/images/whisker/whisker_mount.png"]},
 
 
    {id:'aerorakes',title:'AeroRakes',category:'Penn Electric Racing',year:'2023–2025',subtitle:'Low-cost aerodynamic validation and data acquisition',description:["I successfully developed the club’s first device for aerodynamics data acquisition to validate in-house \
            CFD and design with 90% accuracy (2023-2025). My project goal was to take the concept behind standard Formula 1 Aero Rakes and design a system that replicates these results with the goal of minimizing cost. After trying multiple different mounting mechanisms,\
             I opted for a simple design that maximizes placement options and degrees of freedom.","I conducted wind tunnel testing using rescaled aero elements to compare against CFD with a consistent Reynolds number. The pitot tube sensor found the velocity at different \
             locations about the aero-elements and was compared to the values seen in STAR CCM+ at the exact location along the streamlines."],
             images:["assets/images/aerorakes/aerorake_1.png", "assets/images/aerorakes/aerorake_2.png", 
                "assets/images/aerorakes/windtunnel1.jpg", "assets/images/aerorakes/windtunnel2.jpeg",
            "assets/images/aerorakes/liveback.jpg", "assets/images/aerorakes/livefront.jpg"]},


        
    
        {id:'brakes',title:'Brake System',category:'Penn Electric Racing',year:'2025',subtitle:'Modular CAD redesign of aerodynamic body panels',
            description:[
                "As part of the Rev 11 vehicle development for Penn Electric Racing, I improved the braking system by reducing the rotor mass by 25% and rotor diameter to eliminate scraping we saw the previous year.",
            
                "Key aspects of this project included:",

                "• Using a brake calculation model to dictate the optimal rotor sizing and component selection, accounting for expected hydraulic line pressures, driver foot-force inputs, and dynamic brake bias behavior during wheel lock-up scenarios.",
                "• Redesigning the rotor hole pattern and surface geometry to maximize thermal dissipation and structural integrity while shedding excess mass.",
                "• Using Solidworks to run transient thermal simulations modeled against an the autocross event profile to verify that peak component temperatures remained  below material thresholds.",
                "• Communicating directly with component manufacturers to evaluate brake calipers, review operating pressures, and verify component safety factors to guarantee structural reliability under maximum allowable loads"
                
            ],
             images:["assets/images/brakes/rotor.PNG", "assets/images/brakes/rotor.PNG", 
                "assets/images/brakes/graph.png", "assets/images/brakes/liverotor.png"]},
                
        {
        id: 'rearwing',
         title: 'Rear Wing Redesign',
         category: 'Penn Electric Racing',
         year: '2025',
        subtitle: 'Complete system redesign of the rear wing',
        description: [
          "During summer 2025, I led a complete structural and aerodynamic redesign of the rear wing assembly for the REV11 vehicle. The objective was to maximize downforce relative to drag and mass while shifting the vehicle's center of pressure rearward to improve high-speed stability.",

          "Key aspects of this project included:",

          "• Redesigning the endplate geometry by integrating vortex generators and strategic airfoil slits to manage tip vortices and enhance multi-element aerodynamic coupling.",

          "• Optimizing the lofted main element's chord length and loft angle through iterative CFD sweeps, balancing aerodynamic performance metrics with Design for Manufacturability (DFM).",

          "• Developing and evaluating two distinct aerodynamic packages—an optimized 4-element system and a streamlined 2-element configuration—conducting trade-off analyses to select the ideal setup.",

          "• Characterizing the potential performance gains of a Drag Reduction System (DRS) to quantitatively justify development time, complexity, and manufacturing cost prior to implementation."
  ],
  images: [
    "assets/images/rearwing/4element.png",
    "assets/images/rearwing/2element.png",
    "assets/images/rearwing/endplate.png",
    "assets/images/rearwing/4elementcad.png",
    "assets/images/rearwing/2elementcad.png",
    "assets/images/rearwing/drs.png",
    "assets/images/rearwing/table.png",
   
  ]
},

  {id:'floral',title:'Floral Form',category:'Course Work',year:'Spring 2026',subtitle:'Universal vase attachment for arranging cut flowers',description:["Arranging store-bought flowers often leaves stems loose and ill-fitting in standard vases, forcing people to rely on messy DIY hacks or professional florists. For IPD 5150, I co-designed and manufactured Florist Form—a low-cost,\
             universal vase attachment created for end-of-year commercial sale. Featuring adaptable rim-gripping arms and interchangeable grid inserts, Florist Form holds stems precisely in place across standard vase dimensions while offering custom arrangement patterns."],
             images:["assets/images/floral/main.jpeg", "assets/images/floral/piece.jpeg", 
                "assets/images/floral/2flower.jpeg", "assets/images/floral/print.jpeg"]},


    {id:'catapult',title:'Catapult',category:'Course Work',year:'Spring 2025',subtitle:'Adjustable launcher and projectile-motion prediction model',description:["For my sophomore engineering lab, I designed a catapult and projectile motion model that was able to simulate the trajectory of an object to go through a gap and land at a specific target. \
            The catapult was designed to adjust the launch angle, height, rubber band stretch, and rubber band strength. This adjustability was then incorporated into the model to output a launch angle, number of rubber bands, and rubber band stretch for given target and obstacle coordinates.","The catapult-to-model \
            accuracy was very consistent, leading us to be one of the highest-performing teams on test day."],
            images:["assets/images/catapult/iso.png", "assets/images/catapult/side.png", 
                "assets/images/catapult/graph.png", "assets/images/catapult/launch.mp4"]},
 
    {id:'stirling',title:'Stirling Engine',category:'Course Work',year:'Fall 2024',subtitle:'Designed and machined a bicycle-inspired Stirling engine',description:["I designed and manufactured a Stirling Engine in MEAM 2010: Design and Manufacturing. I was inspired to model it after a bicycle so it would look like the bicycle was moving as the wheel spun, \
            making it seem like a practical application for an engine at the time. I decided on a rough spray-painted finish to give it a used look.","I created the full engine assembly and renders through SolidWorks and manufactured it in the precision machining lab using the mill, lathe, CNC, and Mastercam. During testing, my engine reached a top speed of 2055 rpm, second fastest in the class."],
            images:["assets/images/stirling/isoreal.jpeg", "assets/images/stirling/renderside.png",
                 "assets/images/stirling/back.jpeg", "assets/images/stirling/rendertop.png", "assets/images/stirling/spin.mp4"]},
 

   {id:'bodywork',title:'Bodywork',category:'Penn Electric Racing',year:'2024',subtitle:'Modular CAD redesign of aerodynamic body panels',description:["I re-cadded the body panels, hood, and nose cone into separate pieces based off the actual mold design compared to the combined piece the club had before. \
            This has allowed us to adjust the positioning of the car's bodywork to reflect the new changes made to the chassis. Doing this lets us visualize where the optimal position for each component can be, improving our tab design, efficiency, and helps to create a plan for trimming the components\
             during manufacturing without redesigning the existing molds."],
             images:["assets/images/bodywork/render1.PNG", "assets/images/bodywork/render2.png", "assets/images/bodywork/fit.jpg", 
                "assets/images/bodywork/bodyworkfit.png"]},

        {id:'manuf',title: 'Composite Manufacturing',category:'Penn Electric Racing',year:'2023-2026',subtitle:'Precision fixtures for composite aero manufacturing',description:["I designed jigs for the airfoils made during our in-house layups to help cut the airfoils to size with accuracy. \
            The jigs secure the airfoil in place and provide a leading edge to cut along. I used a Dremel to cut the carbon fiber airfoils, endplates and bodywork. The jigs were also used during the airfoil bonding process to constrain each carbon fiber element."],
            images:["assets/images/manuf/airfoilcut.HEIC", "assets/images/manuf/endplate.JPG", "assets/images/manuf/jig.JPG", "assets/images/manuf/molds.JPG"]},


 
        {id:'f1-car',title:'Model F1 Car',category:'Personal Projects',year:'Summer 2024',subtitle:'Toy-scale Formula 1 CAD concept with steering linkage',description:["I modeled an F1 car on SolidWorks by designing and rescaling a current F1 car with the potential for 3D printing it as a toy. \
            I improved my ability to visualize and create a realistic product, while also designing a linkage-steering system for potential manual interaction. This project showcases my skills and creativity in 3D modeling and design.", 
            "I decided to model the design to fit a 10 x 5 inch frame so that it could potentially be 3D printed or manufactured. This led to me making adjustments to the actual car design in order to maintain a minimum thickness and print feasibility.","I designed a linkage system similar to what \
            can be seen on many toy cars. It fits inside the nose of the car and connects the wheel to the front steering system. The linkage includes two rods which slot into each other between the steering wheel and tire rods that should allow for smooth turning."],
            images:["assets/images/f1-car/f1iso.png", "assets/images/f1-car/f1front.png", 
                "assets/images/f1-car/steer.png", "assets/images/f1-car/f1ani.mp4", 
                "assets/images/f1-car/f1steer.mp4"]},


         {id:'chess',title:'Modified Chess Pieces',category:'Personal Projects',year:'Summer 2024',subtitle:'Reimagining chess pieces with built-in mechanisms',description:["I was inspired by an online video I saw to create modified chess pieces that could potentially be printed and used. \
            I modeled each piece to have its own unique feature without the need of any other parts or tools.","Rook: a spring-like coiled inner piece allows the top to act as a slingshot. \
            Knight: a sliding internal platform supports another piece. King: removing a central rod causes the surrounding cylinders to fall apart. Bishop: a pinned detachable upper section can be flicked toward another piece.\
             Queen: rotating components allow the piece to expand."],
             images:["assets/images/chess/iso.png", "assets/images/chess/side.png",
                 "assets/images/chess/black.png", "assets/images/chess/white.png", 
                 "assets/images/chess/rotate.mp4"]},
 
        {id:'avatar',title:'Avatar Candle Holder',category:'Personal Projects',year:'Summer 2024',subtitle:'A manufactured vessel inspired by Avatar: The Last Airbender',description:["After re-watching one of my favorite childhood shows I was inspired to create a container that could be used for flowers or a candle, etc incorporating some of the show's designs.\
             I decided to model each of the nations' symbols onto one side of the vase, with respect to their color, and the order stated in the show."],
             images:["assets/images/avatar/iso.png", "assets/images/avatar/air.png", "assets/images/avatar/earth.png", "assets/images/avatar/fire.png", "assets/images/avatar/water.png"]},
 
       
       
      
      //  {id:'piston',title:'Piston',category:'Course Work',year:'Spring 2024',subtitle:'SolidWorks piston mechanism modeled from drawings',description:["In one of the earlier projects of my MEAM 1010: Intro to Design and Manufacturing course, we were tasked with modeling this piston device given an engineering drawing and a video of its movements. This project was excellent preparation for the CSWA exam taken at the end of the year and introduced me to more complex mating geometries."],images:[]}
 ]
};
