var pictures = new Array();
    pictures[0] = "../pictures/Gardasee.jpg";
    pictures[1] = "../pictures/it2.png";
    pictures[2] = "../pictures/meer.jpg";

    var speed = 5000;
    var position = 0;

    function diashow(){
            if(!(document.images)) {return;}

            document.bild.src=pictures[position++];

            if(position == pictures.length){position=0;}
            setTimeout("diashow();", speed);
    }