
import { BehindImages, SwiperData, TransformSectionData, TransformerMessage } from './typescript.type';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transform-section',
  templateUrl: './transform-section.component.html',
  styleUrls: ['./transform-section.component.scss']
})
export class TransformSectionComponent {
  // Define faArrowRight variable
  faArrowRight = faArrowRight;

  // Define message object
  message: TransformerMessage = {
    heading: 'Transforming organizations, driving value',
    message: "People are the core to our every team, business, and process. We bring value by optimally combining the art and science of finding the right talent and the right role. Our streamlined processes and understanding of industry dynamics empower us to efficiently solve talent and recruitment problems.",
    redirectLink: ["https://indihire.com/what-we-do", "https://indihire.com/navigate-to-your-next-opportunity/#job-opportunities"]
  };

  // Define behindImages array
  behindImages: BehindImages = ["../../assets/images/left_row.jpg", "../../assets/images/right_hand_row.jpg"];

  // Define ArrowImage variable
  ArrowImage: string = "../../assets/images/straight-arrow.png";

  // Define swiperData array
  swiperData: SwiperData[] = [
    {
      title: "RPO",
      image: "../../assets/images/rpo.png",
    },
    {
      title: "IT & Digital perm recruitment",
      image: "../../assets/images/it_and_digital.png",
    },
    {
      title: "IT Staffing",
      image: "../../assets/images/it_staffing.png",
    }
  ];

  // Initialize currentIndex variable
  currentIndex = 0;

  // Initialize autoplayInterval variable
  autoplayInterval: any;

  // Called when the component is initialized
  ngOnInit() {
    this.insertNextImage();
    this.startAutoplay();
  }

  // Called when the component is destroyed
  ngOnDestroy() {
    this.stopAutoplay();
  }

  // Inserts the next image in the carousel
  insertNextImage() {
    // Get carousel elements by their IDs
    const image = document.getElementById("carouselImage") as HTMLImageElement;
    const title = document.getElementById("carouselTitle") as HTMLElement;

    // Set the image source and title from the swiperData
    image.src = this.swiperData[this.currentIndex].image;
    title.textContent = this.swiperData[this.currentIndex].title;

    // Increment the index
    this.currentIndex = (this.currentIndex + 1) % this.swiperData.length;
  }

  // Moves to the previous slide
  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.swiperData.length) % this.swiperData.length;
    this.insertNextImage();
  }

  // Moves to the next slide
  nextSlide() {
    this.insertNextImage();
  }

  // Starts the autoplay of the carousel
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  // Stops the autoplay of the carousel
  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }

  // Define transformSectionData object
  transformSectionData: TransformSectionData = {
    transformerMessage: this.message,
    swiperData: this.swiperData,
    behindImages: this.behindImages
  };



}
