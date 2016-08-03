
			var json = {
					    		"photolist": [{
											        
											            "images": "http://www.calgaryherald.com/news/cms/binary/6283266.jpg?size=640x420"
											    }, {
											        
											            "images": "http://cdn.bramuenhome.com/2016/04/17/medium_wedding-cake-toppers-via-flickr-zelfmaakidee-pinterest.jpg"
											    }, {
											        
											            "images": "http://media.jrn.com/images/435931_6955219_ver1.0_640_480.jpg"
											    }, {
											        
											            "images": "http://cdn.petpencils.co/2016/07/10/medium_puppy-cake-a-blog-tutorial-my-cake-school.jpg"
											    },
											    {
											    		"images" :"https://thekayword.files.wordpress.com/2014/05/mug-cakes.jpg"
											    },

											    {

											    		"images" :"http://www.thesisterscafe.com/wp-content/uploads/2013/05/Watermelon-Cake-3.jpg"		

											    }




											    ]
							};



				var output = ""; // initialize it outside the loop
				$.each(json.photolist,function()
				{
  			     output += '<li><img src= "'+this.images+'"></li>';
				});
				$('.items').append(output);
