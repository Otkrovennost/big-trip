import AbstractComponent from './abstract-component.js';

const FILTER_ID_DASH = `filter-`;

const getFilterNameById = (id) => {
  return id.substring(FILTER_ID_DASH.length);
};

const createFilterMarkup = (filter) => {
  const {name, isChecked} = filter;

  return (
    `<div class="trip-filters__filter">
      <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
    </div>`
  );
};

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it) => createFilterMarkup(it, it.isChecked)).join(`\n`);

  return `<form class="trip-filters" action="#" method="get">
    ${filtersMarkup}
    </form>`;
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      const filterName = getFilterNameById(evt.target.id);
      if (evt.target.tagName === `LABEL`) {
        return;
      }
      handler(filterName);
    });
  }
}
