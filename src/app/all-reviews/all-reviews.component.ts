import {Component, OnInit} from '@angular/core';
import {ReviewMeta} from '../_shared/interfaces';
import {RestService} from '../_shared/rest.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.scss']
})
export class AllReviewsComponent implements OnInit {

  reviewsPreview: ReviewMeta[] = []
  showFullReview: boolean = false
  scrollTimeout: any
  loading: boolean = false

  constructor(
    private rest: RestService
  ) { }

  ngOnInit(): void {
    this.loadFiles()
  }

  loadFiles() {
    this.loading = true
    this.rest.getFilesMeta(20).subscribe(
      (reviewsPreview: ReviewMeta[]) => {
        this.reviewsPreview = [...this.reviewsPreview, ...reviewsPreview]
        this.loading = false
      },
      (error) => {
        console.log(error)
      }
    )
  }

  chooseReview(id: string) {
    this.rest.getFile(id).subscribe(
      () => {
        this.showFullReview = true
      },
      (error) => console.log(error)
    )
  }

  checkScrollForLoad(event) {
    clearTimeout(this.scrollTimeout)

    this.scrollTimeout = setTimeout(() => {
      const target = event.target
      if (target.scrollTop + 50 >= target.scrollHeight - target.offsetHeight) {
        this.loadFiles()
      }
    }, 40)
  }

}
