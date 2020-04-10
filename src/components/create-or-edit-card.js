import {formatDate, formatTime} from "../utils.js";
import {routeTypes, cities} from "../mock/card.js";

export const createEditCardTemplate = (cardData) => {

  const {type, city, photos, description, services, start, end, price} = cardData;
  const startDate = formatDate(new Date(start), false);
  const endDate = formatDate(new Date(end), false);

  const startTime = formatTime(new Date(start).getHours(), new Date(start).getMinutes());
  const endTime = formatTime(new Date(end).getHours(), new Date(end).getMinutes());

  return (`
    <form class="event  event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Transfer</legend>
              ${routeTypes.slice(0, 7).map((typeTransport) => {
      return (`
                  <div class="event__type-item">
                    <input id="event-type-${typeTransport.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeTransport.toLowerCase()}">
                    <label class="event__type-label  event__type-label--${typeTransport.toLowerCase()}" for="event-type-${typeTransport.toLowerCase()}-1">${typeTransport}</label>
                  </div>
                `);
    }).join(``)}
            </fieldset>

            <fieldset class="event__type-group">
              <legend class="visually-hidden">Activity</legend>
              ${routeTypes.slice(7).map((activity) => {
      return (`
                  <div class="event__type-item">
                    <input id="event-type-${activity.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${activity.toLowerCase()}">
                    <label class="event__type-label  event__type-label--${activity.toLowerCase()}" for="event-type-${activity.toLowerCase()}-1">${activity}</label>
                  </div>
               `);
    }).join(``)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
          ${type} to
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
          <datalist id="destination-list-1">
          ${cities.map((cityName) => {
      return (`
              <option value="${cityName}"></option>
            `);
    }).join(``)}
          </datalist>
        </div>
        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">
            From
          </label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate} ${startTime}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">
            To
          </label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate} ${endTime}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
          ${services.map((service) => {
      return (`
              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-${service.type}-1" type="checkbox" name="event-offer-${service.type}" checked>
                <label class="event__offer-label" for="event-offer-${service.type}-1">
                  <span class="event__offer-title">${service.title}</span>
                  &plus;
                  &euro;&nbsp;<span class="event__offer-price">${service.price}</span>
                </label>
              </div>
            `);
    }).join(``)}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
            ${photos.map((photo) => {
      return (`
                <img class="event__photo" src="${photo}" alt="Event photo">
             `);
    })}
            </div>
          </div>
        </section>
      </section>
    </form>
  `);
};
