var pictures = new Array();
    pictures[0] = "../pictures/Ballspielgruppe.jpg";
    pictures[1] = "../pictures/it2.png";
    pictures[2] = "../pictures/meer.jpg";

    var speed = 3000;
    var position = 0;

    function diashow(){
            if(!(document.images)) {return;}

            document.bild.src=pictures[position++];

            if(position == pictures.length){position=0;}
            setTimeout("diashow();", speed);
    }