 function watchFrom(){
    $(".dog-form").on('click', function(event){
         event.preventDefault();
         $('.pictures').remove()
          let number = $('#number').val()   
          console.log(number)
          $('.pictures-section').append(`<h1 class = 'pictures'> Your Dogs</h1>`)
          getPhotos(number)
          
     }) 
     
    
 }
   function displayPicture(object){
      
      object.message.forEach(function(photo){
          $('.pictures-section').append(`
          <img src=${photo} alt = "huh?" class= "pictures">`)

      })
    }

       
   



function getPhotos(number){
    
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then (response => response.json())
    .then (responseJson => displayPicture(responseJson))


}





$(function(){
    console.log(`'js' up and running`)
    watchFrom();
   
})