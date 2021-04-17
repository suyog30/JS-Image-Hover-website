$(document).ready(    
    $.ajax({
      type:'GET', 
      url: 'data.json',
      dataType: 'json',
      success: function(result){
        alert("alert works");
        // $(data).each(function(){
        //    var id = $(this).find('id').text();
        // alert(id);
        // var imgContainer = $("#imgContainer");
        // $.each(jsonData,function(key,value){
        //     console.log(imgContainer);
        //     imgContainer.append('<img title="'+value.name+'" src="'+value.url+'" />');
        // });
    },
    error: function() { alert(this.dataType);  }
    })
);