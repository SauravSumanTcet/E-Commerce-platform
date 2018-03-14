const MAX_RATING = 5;
export class Rating {
    rateChart: RatingClass[]
    constructor() {
        for (let i = 0; i < MAX_RATING; i++) {
            let _r: RatingClass = {
                ratingParam: i + 1
                , numOfRating: 0
            }
            this.rateChart.push(_r);
        }
    }
}

export class RatingClass {
    ratingParam: number
    numOfRating: number
    constructor(ratingParam, numOfRating) {
        this.ratingParam = ratingParam;
        this.numOfRating = numOfRating;
    }
}