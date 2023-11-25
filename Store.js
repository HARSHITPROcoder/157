AFRAME.registerComponent("store",{
    init: function(){
        this.placesContainer = this.el;
        this.createCards()
    },

    createCards: function(){
        const thumbNailsRef= [
            {
                id:"Iron-Man",
                Title:"Iron Man",
                url:"./Iron_Man.jpg"
            },
            {
                id:"Peter-Parker",
                Title:"Peter Parker",
                url:"./peter_parker.jpg"
            },
            {
                id:"Hulk",
                Title:"Hulk",
                url:"./hulk.jpg",
            },
            {
                id:"What-If",
                Title:"What If",
                url:"./what if.jpg"
            },
        ];
        let prevoiusXposition = -60

        for(var item of thumbNailsRef){
            const posX = prevoiusXposition + 25;
            const posY = 10;
            const posZ = -40;
            const position = { x:posX, y:posY, z:posZ };
            prevoiusXposition = posX;

            //Border Element

            const borderEl = this.createBorder(position, item.id)

            //ThumbNail Element

            const thumbnail = this.createThumbNail(item)
            borderEl.appendChild(thumbnail)

            // Title Text Element

            const titleEl = this.createTitleEl(position, item)
            borderEl.appendChild(titleEl)

            this.placesContainer.appendChild(borderEl);
        }
    },
    createBorder: function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "ring",
          radiusInner: 9,
          radiusOuter: 10,
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
          color: "#0077CC",
          opacity: 1,
        });

        return entityEl;
    },

    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "circle",
          radius: 9,
        });
        entityEl.setAttribute("material", { src: item.url });
    
        return entityEl;
      },
    
      createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
      },
})