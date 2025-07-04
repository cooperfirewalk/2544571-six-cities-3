import { City } from './types/offer';

export const CITIES: City[] = [
  {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  {
    'name': 'Cologne',
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13
    }
  },
  {
    'name': 'Brussels',
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13
    }
  },
  {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 13
    }
  },
  {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13
    }
  },
  {
    'name': 'Dusseldorf',
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13
    }
  }
];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CardClass {
  Favorites = 'favorites',
  NearPlaces = 'near-places',
  Cities = 'cities'
}

export enum BookmarkClass{
  Offer = 'offer',
  PlaceCard = 'place-card'
}

export enum AppRoute {
  Login = '/login',
  OfferWithId = '/offer/:id',
  Favorites = '/favorites',
  Main = '/',
}

export const URL_MARKER_DEFAULT =
  '../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../img/pin-active.svg';

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorites = '/favorite'
}


export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
  Offer = 'OFFER',
  Review = 'REVIEW',
  Favorites = 'FAVORITES'
}

export const enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed
}
