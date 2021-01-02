
$(document).ready(function(){
    $("#sidebarbutton").on('click',function(){
        $('#sidebar,#content').toggleClass('active');
    });
    $("#place").click(function(){
        open('index.html');
     });
    
    var $a=$('.a'),
     $b=$('.b'),
     $c=$('.c'),
     $d=$('.d'),
     $con=$('.con'),
     $about=$('.about'),
     $gallery=$('.gallery'),
     $contact=$('.contact');
     

     

     $a.click(function(){
         $con.fadeIn();
         $about.fadeOut();
         $gallery.fadeOut();
         $contact.fadeOut();
     });
     $b.click(function(){
         $con.fadeOut();
         $about.fadeIn();
         $gallery.fadeOut();
         $contact.fadeOut();
     });
    $c.click(function(){
        $con.fadeOut();
         $about.fadeOut();
         $gallery.fadeIn();
         $contact.fadeOut();


    });
    $d.click(function(){
        $con.fadeOut();
         $about.fadeOut();
         $gallery.fadeOut();
         $contact.fadeIn();

    })
    $("#v1").click(function(){
        $("#veg").show();
        $("#nonveg").hide();
    });
    $("#v2").click(function(){
        $("#veg").hide();
        $("#nonveg").show();
    })
     


});

