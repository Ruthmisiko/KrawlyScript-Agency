<template>
  <div class="banner-1">
    <!-- NavBar -->
    <nav
      class="container px-6 mx-auto md:flex md:justify-between md:items-center fixed top-0 left-0 right-0 z-50 bg-white shadow-md text-blue-600"
    >
      <div class="flex items-center justify-between">
        <div class="relative w-16 h-16">
          <!-- <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&h=512&q=80"
            alt="user image"
          /> -->
          <h2 class="menu-button" >KrawlyScript</h2>
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="menu-button"><a href="#">Home</a></li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>About</a></li>
        <li class="menu-button"><a href="#services">Services</a></li>
        <li class="menu-button"><a href="#contact">Contact Us</a></li>
        <li class="menu-button"><a href="#">Projects</a></li>
        <li class="menu-button">
          <a href="#testimonial" v-smooth-scroll>Testimonials</a>
        </li>
       
      </ul>
    </nav>
   

    <div class="flex items-center">
      <div class="w-11/12 space-y-5 md:space-y-10">
        
        <h1
          class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-blue-600"
        >
        Welcome to KrawlyScript
          <br />Agency
        </h1>

        <h3
          class=" text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"
        >
          👋 We deliver high quality academic writing, including research papers, essays and reports,tailored to meet your specific needs. Additionally, we offer compelling copywriting and insightful articles that help elevate your brand and engage your audience effectively.
        </h3>

        <div class="md:flex gap-1 md:gap-10">
          <button class="text-white bg-blue-600 submit-button hidden md:block">
            View Our Work
          </button>
          <button
            class="text-gray-800 border-4 border-blue-800 submit-button mb-5 md:mb-0"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div class="w-8/12 flex justify-end">
        <img
          class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          src="./assets/photo11.jpg"
          alt="user image"
        />
      </div>
    </div>
  </div>

  <div class=" md:flex items-center md:justify-evenly" id="about">
    <img
      class="md:h-[500px] h-[400px]"
      src="./assets/1.png"
      alt="user image"
    />
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h3 class="heading3">About Us</h3>
      <p class="font-work_sans">
        At Krawlyscript Agency, we are passionate about words. Our mission is to provide you with written content that not only informs but also inspires. With a team of skilled writers from diverse backgrounds, we specialize in academic writing, copywriting, and article creation that speaks to your target audience. Each piece of work we produce is carefully crafted to meet the highest standards of quality, originality, and relevance. 
        <br />
 
      </p>
      <button class="text-sky-800 font-bold text-2xl tracking-wider">
    
      </button>
    </div>
  </div>


    <div id="services" class="services">
      <div class="space-y-4 grid place-items-center mt-5">
      <h3 class="heading3">Our Services</h3>
      
    </div>
            <div class="cards">
                <div class="card1">
                    
                  <h3
  class="hello-button text-gray-700 w-fit mx-auto text-center md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"
>
  Academic Writing
</h3>

                    <p>Research Papers</p>
                    <p>Essays and Reports</p>
                    <p>Theses and Dissertations</p>
                    
                   
                </div>
                <div class="card1">
                  <h3
  class="hello-button text-gray-700 w-fit mx-auto text-center md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"
>
  Copy Writing
</h3>

                    <p>Website Content</p>
                    <p>Marketing Campaigns</p>
                    <p>Product Descriptions</p>
                   
                </div>
                <div class="card1">
                  <h3
  class="hello-button text-gray-700 w-fit mx-auto text-center md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"
>
  Article Writing
</h3>

                    <p>Thought Leadership Pieces</p>
                    <p>Blog Posts</p>
                    <p>News and Editorials</p>
                   
                </div>
            </div>            
        </div>  


  <div class="banner-1" id="testimonial">
    <div class="space-y-4 grid place-items-center mt-5">
      <h3 class="heading3">Why Choose Us?</h3>
      
    </div>
    <div class="max-w-6xl mx-auto px-8 py-16">
      <div class="relative">
        <div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
          <div
            class="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center"
          >
            <img
              class="absolute h-full w-full object-cover"
               src="./assets/1.png"
              alt=""
            />
            
          </div>
          <div class="relative lg:w-7/12 bg-white">
            <svg
              class="absolute h-full text-white w-24 -ml-12"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div
              class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed"
            >
              <p>
                At KrawlyScript, we believe in more than just providing services—we believe in building lasting connections. Our dedication to quality ensures that every interaction you have with us brings you one step closer to realizing your goals.
              </p>
             
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 left-0 lg:flex lg:items-center">
          <button
            class="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg"
          >
            <svg
              class="h-full w-full text-indigo-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
              />
            </svg>
          </button>
        </div>
        <div class="absolute inset-y-0 right-0 lg:flex lg:items-center">
          <button
            class="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg"
          >
            <svg
              class="h-full w-full text-indigo-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="contact-container" id="contact">
    <div class="form-section">
        <a href="#" class="connect-button">LET'S CONNECT</a>
        <h1>We're here to help</h1>
        <form id="contact-form" onsubmit="sendEmail(event)">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Enter your Name" required>

          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Enter a valid email address" required>

          <label for="message">Message</label>
          <textarea id="message" rows="5" v-model="formData.message" placeholder="Enter your message" required></textarea>

          <button type="submit" style="background-color: #007BFF;">SUBMIT</button>
        </form>
      </div>
    
            <!-- Image Section -->
            <div class="image-section">
              <img
              
               src="./assets/contact.jpg"
              alt=""
            />
            </div>
        </div>


  <div class="banner-1 flex h-full items-center">
    <div class="w-7/12 p-12">
      <h2 class="text-black md:text-6xl text-2xl mb-5 ">
     
      </h2>
      <div class="flex flex-wrap justify-end gap-2">
        <button
          class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
        >
        <a href="https://wa.me/0713147072" target="_blank" class="whatsapp-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="40">
        </a>                
          
        </button>

        <button
          class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
        >
        <a href="https://x.com/krawlyscript?t=NWoEfyQT-BcUwzZOyxpYyg&s=09" target="_blank" class="whatsapp-button">
          <i class="fa fa-twitter" aria-hidden="true" style="color: white; font-size: xx-large;"></i>

        </a> 
        </button>
        <button
          class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
        >
        <a href="https://www.instagram.com/krawlyscript_agency?igsh=OTU0MzhnZTVvaWo2" target="_blank" class="whatsapp-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="40">
        </a>                   
        </button>

        <button
          class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
        >
        <a href="mailto:Krawlyscriptagency@gmail.com" target="_blank" class="whatsapp-button">
          <i class="fa fa-envelope-o" aria-hidden="true" style="color: white; font-size: xx-large;"></i>
        </a> 
        </button>

        

        

        
      </div>
   
      
    </div>
    
  </div>
  <p style="text-align: center;">&copy;  Designed by KrawlyScript Agency</p>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
};

function sendEmail(event) {
    event.preventDefault(); // Prevents default form submission

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let mailtoLink = `mailto:ruthmisiko2@gmail.com.com?subject=New Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    
    window.location.href = mailtoLink;
}
</script>

