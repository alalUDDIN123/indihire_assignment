
import { BehindImages, SwiperData, TransformSectionData, TransformerMessage } from './typescript.type';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transform-section',
  templateUrl: './transform-section.component.html',
  styleUrls: ['./transform-section.component.scss']
})
export class TransformSectionComponent {
  faArrowRight = faArrowRight;

  message: TransformerMessage = {
    heading: ['Transforming', 'organizations', 'driving', 'value'],
    message: "People are the core to our every team, business, and process. We bring value by optimally combining the art and science of finding the right talent and the right role. Our streamlined processes and understanding of industry dynamics empower us to efficiently solve talent and recruitment problems.",
    redirectLink: ["https://indihire.com/what-we-do", "https://indihire.com/navigate-to-your-next-opportunity/#job-opportunities"]
  };

  behindImages: BehindImages = ["../../assets/images/left_row.jpg", "../../assets/images/right_hand_row.jpg"]


  ArrowImage: string = "../../assets/images/straight-arrow.png"


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

  slidePosition = 0;
  autoplayInterval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  previousSlide() {
    if (this.slidePosition === 0) {
      this.slidePosition = (this.swiperData.length - 1) * -100;
    } else {
      this.slidePosition += 100;
    }
  }

  nextSlide() {
    if (this.slidePosition === (this.swiperData.length - 1) * -100) {
      this.slidePosition = 0;
    } else {
      this.slidePosition -= 100;
    }
  }



  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 2000); // here we can maintain time delay of carousal
  }

  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }


  transformSectionData: TransformSectionData = {
    transformerMessage: this.message,
    swiperData: this.swiperData,
    behindImages: this.behindImages
  };



}
