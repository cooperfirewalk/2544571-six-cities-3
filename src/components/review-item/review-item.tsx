import { Review } from '../../types/review';
import dayjs from 'dayjs';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({review}:ReviewItemProps): JSX.Element {
  const date = new Date(review.date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${Math.round(review.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>{dayjs(date).format('MMMM D')}</time>
      </div>
    </li>);
}

export default ReviewItem;
