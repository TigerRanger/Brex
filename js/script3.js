

jQuery(document).ready(function ($) {
  $(".apparel .prod").hide(); 
  
  var levels = [];
  var levelnos = [];
  var levelfirstprod = [];
  var levellinks = [];
  var levellinksnames = [];
  $(".apparel .level1").each(function(index){
    levels.push ($(this).attr("data-categoryname"));
    levelnos.push ($(this).attr("data-categoryno"));
    levelfirstprod.push($(this).children([0]).attr("data-prodno") );
    
    var temp = [];
    var temp2 = [];
    $(this).children([0]).each(function(index, element) {
            temp.push($(element).attr("data-prodno"));
      temp2.push($(element).attr("data-name-link"));
        });
    
    levellinks.push(temp);
    levellinksnames.push(temp2);
    
    
  });
  
  
  function showProduct(numb){
    apparel_current = numb;
    //Get Category
    dc = $(".apparel .prod[data-prodno=" + numb +"]").attr("data-category");

    // Display Category at top, make other category as link
    $(".apparel #apparel-inactive-cat1").html("");
    $(".apparel #apparel-inactive-cat2").html("");
    $.each(levelnos,function(index,value){
      if(parseInt(dc) == parseInt(value)){
        $(".apparel #apparel-active-cat").html(levels[index]);
      }else{
        adata = '<a class="showpic" href="#" data-prodno='+ levelfirstprod[index] +' >' + levels[index]+ '</a>';
        
        if($(".apparel #apparel-inactive-cat1").html() == ""){
          $(".apparel #apparel-inactive-cat1").html(adata);
        }else{
          $(".apparel #apparel-inactive-cat2").html(adata);
        }
      }
    });
    
    // create links for products in this category
    /*
    newhtml = "";
    $.each(levellinks[parseInt(dc)-1], function(index,value){
      newhtml+= '<a class="showpic" href="#" data-prodno="'+ value +'" >' + levellinksnames[parseInt(dc)-1][index]+ '</a> <br>';
    });
    $("#apparel-category-links").html(newhtml);   
    */
    
    // hide shown product
    $(".apparel .prod:eq("+ (apparel_current_old -1)+")" ).hide(100, 'easeInQuart', function(){
      // show this product 
      $(".apparel .prod:eq("+ (parseInt(numb)-1)+")" ).show(400, 'easeOutQuart');
    });
    $(".apparel a.showpic").click(function (e) {
      e.preventDefault();
      datas = $(this).attr('data-prodno');
      showProduct(parseInt(datas));
      
    });
    apparel_current_old = numb;
    apparel_current++;
    if(apparel_current> apparel_total){
      apparel_current=1;
    }

  }
  apparel_current_old=1;
  apparel_current=1;
  apparel_total = 14;
  
  
  /*  
  $("#apparel-back").click(function(e) {
    e.preventDefault();
    if(apparel_current!=1){
      apparel_current--;
      showProduct(apparel_current);
    }
  });

  $("#apparel-next").click(function(e) {
    e.preventDefault();
    if(apparel_current< apparel_total){
      apparel_current++;
      showProduct(apparel_current);
    }
  });
  */
  
  
  
  
  showProduct(apparel_current);
  var interval = setInterval(function(){showProduct(apparel_current);},4000);

  
});


jQuery(document).ready(function ($) {
  $(".leather .prod").hide(); 
  
  var blevels = [];
  var blevelnos = [];
  var blevelfirstprod = [];
  var blevellinks = [];
  var blevellinksnames = [];
  $(".leather .level1").each(function(index){
    blevels.push ($(this).attr("data-categoryname"));
    blevelnos.push ($(this).attr("data-categoryno"));
    blevelfirstprod.push($(this).children([0]).attr("data-prodno") );
    
    var temp = [];
    var temp2 = [];
    $(this).children([0]).each(function(index, element) {
            temp.push($(element).attr("data-prodno"));
      temp2.push($(element).attr("data-name-link"));
        });
    
    blevellinks.push(temp);
    blevellinksnames.push(temp2);
    
    
  });
  
  
  function showProduct3(numb){
    b_apparel_current = numb;
    //Get Category
    dc = $(".leather .prod[data-prodno=" + numb +"]").attr("data-category");

    // Display Category at top, make other category as link
    $(".leather #apparel-inactive-cat1").html("");
    $(".leather #apparel-inactive-cat2").html("");
    $.each(blevelnos,function(index,value){
      if(parseInt(dc) == parseInt(value)){
        $(".leather #apparel-active-cat").html(blevels[index]);
      }else{
        adata = '<a class="showpic" href="#" data-prodno='+ blevelfirstprod[index] +' >' + blevels[index]+ '</a>';
        
        if($(".leather #apparel-inactive-cat1").html() == ""){
          $(".leather #apparel-inactive-cat1").html(adata);
        }else{
          $(".leather #apparel-inactive-cat2").html(adata);
        }
      }
    });
    
    // create links for products in this category
    /*
    newhtml = "";
    $.each(levellinks[parseInt(dc)-1], function(index,value){
      newhtml+= '<a class="showpic" href="#" data-prodno="'+ value +'" >' + levellinksnames[parseInt(dc)-1][index]+ '</a> <br>';
    });
    $("#apparel-category-links").html(newhtml);   
    */
    
    // hide shown product
    $(".leather .prod:eq("+ (b_apparel_current_old -1)+")" ).hide(100, 'easeInQuart', function(){
      // show this product 
      $(".leather .prod:eq("+ (parseInt(numb)-1)+")" ).show(400, 'easeOutQuart');
    });
    $(".leather a.showpic").click(function (e) {
      e.preventDefault();
      datas = $(this).attr('data-prodno');
      showProduct3(parseInt(datas));
      
    });
    b_apparel_current_old = numb;
    b_apparel_current++;
    if(b_apparel_current> b_apparel_total){
      b_apparel_current=1;
    }

  }
  b_apparel_current_old=1;
  b_apparel_current=1;
  b_apparel_total = 6;
  
  /*  
  $("#apparel-back").click(function(e) {
    e.preventDefault();
    if(apparel_current!=1){
      apparel_current--;
      showProduct(apparel_current);
    }
  });

  $("#apparel-next").click(function(e) {
    e.preventDefault();
    if(apparel_current< apparel_total){
      apparel_current++;
      showProduct(apparel_current);
    }
  });
  */
  
  
  
  
  showProduct3(b_apparel_current);
  var interval = setInterval(function(){showProduct3(b_apparel_current);},4000);

  
});
<!--ACCESSORIES -->
<script>
jQuery(document).ready(function ($) {
  $(".accessories .prod").hide(); 
  
  var alevels = [];
  var alevelnos = [];
  var alevelfirstprod = [];
  var alevellinks = [];
  var alevellinksnames = [];
  $(".accessories .level1").each(function(index){
    alevels.push ($(this).attr("data-categoryname"));
    alevelnos.push ($(this).attr("data-categoryno"));
    alevelfirstprod.push($(this).children([0]).attr("data-prodno") );
    
    var temp = [];
    var temp2 = [];
    $(this).children([0]).each(function(index, element) {
            temp.push($(element).attr("data-prodno"));
      temp2.push($(element).attr("data-name-link"));
        });
    
    alevellinks.push(temp);
    alevellinksnames.push(temp2);
    
    
  });
  
  
  function showProduct2(numb){
    a_apparel_current = numb;
    //Get Category
    dc = $(".accessories .prod[data-prodno=" + numb +"]").attr("data-category");

    // Display Category at top, make other category as link
    $(".accessories #apparel-inactive-cat1").html("");
    $(".accessories #apparel-inactive-cat2").html("");
    $.each(alevelnos,function(index,value){
      if(parseInt(dc) == parseInt(value)){
        $(".accessories #apparel-active-cat").html(alevels[index]);
      }else{
        adata = '<a class="showpic" href="#" data-prodno='+ alevelfirstprod[index] +' >' + alevels[index]+ '</a>';
        
        if($(".accessories #apparel-inactive-cat1").html() == ""){
          $(".accessories #apparel-inactive-cat1").html(adata);
        }else{
          $(".accessories #apparel-inactive-cat2").html(adata);
        }
      }
    });
    
    // create links for products in this category
    /*
    newhtml = "";
    $.each(levellinks[parseInt(dc)-1], function(index,value){
      newhtml+= '<a class="showpic" href="#" data-prodno="'+ value +'" >' + levellinksnames[parseInt(dc)-1][index]+ '</a> <br>';
    });
    $("#apparel-category-links").html(newhtml);   
    */
    
    // hide shown product
    $(".accessories .prod:eq("+ (a_apparel_current_old -1)+")" ).hide(100, 'easeInQuart', function(){
      // show this product 
      $(".accessories .prod:eq("+ (parseInt(numb)-1)+")" ).show(400, 'easeOutQuart');
    });
    $(".accessories a.showpic").click(function (e) {
      e.preventDefault();
      datas = $(this).attr('data-prodno');
      showProduct2(parseInt(datas));
      
    });
    a_apparel_current_old = numb;
    a_apparel_current++;
    if(a_apparel_current> a_apparel_total){
      a_apparel_current=1;
    }

  }
  a_apparel_current_old=1;
  a_apparel_current=1;
  a_apparel_total = 6;
  
  /*  
  $("#apparel-back").click(function(e) {
    e.preventDefault();
    if(apparel_current!=1){
      apparel_current--;
      showProduct(apparel_current);
    }
  });

  $("#apparel-next").click(function(e) {
    e.preventDefault();
    if(apparel_current< apparel_total){
      apparel_current++;
      showProduct(apparel_current);
    }
  });
  */
  
  
  
  
  showProduct2(a_apparel_current);
  var interval = setInterval(function(){showProduct2(a_apparel_current);},4000);

  
});

<!--HOME-->
<script>
jQuery(document).ready(function ($) {
  $(".home .prod").hide();  
  
  var clevels = [];
  var clevelnos = [];
  var clevelfirstprod = [];
  var clevellinks = [];
  var clevellinksnames = [];
  $(".home .level1").each(function(index){
    clevels.push ($(this).attr("data-categoryname"));
    clevelnos.push ($(this).attr("data-categoryno"));
    clevelfirstprod.push($(this).children([0]).attr("data-prodno") );
    
    var temp = [];
    var temp2 = [];
    $(this).children([0]).each(function(index, element) {
            temp.push($(element).attr("data-prodno"));
      temp2.push($(element).attr("data-name-link"));
        });
    
    clevellinks.push(temp);
    clevellinksnames.push(temp2);
    
    
  });
  
  
  function showProduct4(numb){
    c_apparel_current = numb;
    //Get Category
    dc = $(".home .prod[data-prodno=" + numb +"]").attr("data-category");

    // Display Category at top, make other category as link
    $(".home #apparel-inactive-cat1").html("");
    $(".home #apparel-inactive-cat2").html("");
    $.each(clevelnos,function(index,value){
      if(parseInt(dc) == parseInt(value)){
        $(".home #apparel-active-cat").html(clevels[index]);
      }else{
        adata = '<a class="showpic" href="#" data-prodno='+ clevelfirstprod[index] +' >' + clevels[index]+ '</a>';
        
        if($(".home #apparel-inactive-cat1").html() == ""){
          $(".home #apparel-inactive-cat1").html(adata);
        }else{
          $(".home #apparel-inactive-cat2").html(adata);
        }
      }
    });
    
    // create links for products in this category
    /*
    newhtml = "";
    $.each(levellinks[parseInt(dc)-1], function(index,value){
      newhtml+= '<a class="showpic" href="#" data-prodno="'+ value +'" >' + levellinksnames[parseInt(dc)-1][index]+ '</a> <br>';
    });
    $("#apparel-category-links").html(newhtml);   
    */
    
    // hide shown product
    $(".home .prod:eq("+ (c_apparel_current_old -1)+")" ).hide(100, 'easeInQuart', function(){
      // show this product 
      $(".home .prod:eq("+ (parseInt(numb)-1)+")" ).show(400, 'easeOutQuart');
    });
    $(".home a.showpic").click(function (e) {
      e.preventDefault();
      datas = $(this).attr('data-prodno');
      showProduct4(parseInt(datas));
      
    });
    c_apparel_current_old = numb;
    c_apparel_current++;
    if(c_apparel_current> c_apparel_total){
      c_apparel_current=1;
    }

  }
  c_apparel_current_old=1;
  c_apparel_current=1;
  c_apparel_total = 5;
  
  /*  
  $("#apparel-back").click(function(e) {
    e.preventDefault();
    if(apparel_current!=1){
      apparel_current--;
      showProduct(apparel_current);
    }
  });

  $("#apparel-next").click(function(e) {
    e.preventDefault();
    if(apparel_current< apparel_total){
      apparel_current++;
      showProduct(apparel_current);
    }
  });
  */
  
  
  
  
  showProduct4(c_apparel_current);
  var interval = setInterval(function(){showProduct4(c_apparel_current);},4000);

  
});
