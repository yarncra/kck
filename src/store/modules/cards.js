/* eslint-disable function-paren-newline */
import dateFormat from 'dateformat';
import api from '../../api/cards';

const state = {
  cards: [],
  filteredCards: [],
  sortedCards: [],
  types: [],
  isLoading: false,
};

const mutations = {
  deleteCard(state, id) {
    if (state.sortedCards.length) {
      state.filteredCards = state.sortedCards;
    } else {
      state.filteredCards = state.cards;
    }
    state.sortedCards = state.filteredCards.filter((el) => el.id !== id);
  },
  toggleDeletePopup(state, id) {
    state.filteredCards = state.cards.map((el) => {
      if (el.id === id) {
        el.isVisible = !el.isVisible;
        return el;
      }
      el.isVisible = false;
      return el;
    });
  },
  searchInvoiceNumber(state, invoiceNumber) {
    state.filteredCards = state.cards;
    state.sortedCards = state.filteredCards.filter((el) => {
      if (el.number.toLowerCase().indexOf(invoiceNumber.toLowerCase()) !== -1) {
        return el;
      }
      return '';
    });
  },
  sortByCardNumber(state, option) {
    if (state.sortedCards.length) {
      state.filteredCards = state.sortedCards;
    } else {
      state.filteredCards = state.cards;
    }

    if (option.value === 1) {
      state.sortedCards = state.filteredCards.sort((a, b) =>
        // eslint-disable-next-line comma-dangle, implicit-arrow-linebreak
        a.number.localeCompare(b.number)
      );
    }
    if (option.value === 2) {
      state.sortedCards = state.filteredCards.sort((a, b) =>
        // eslint-disable-next-line comma-dangle, implicit-arrow-linebreak
        b.number.localeCompare(a.number)
      );
    }
  },
  filterByCardType(state, type) {
    if (type === 'Все') {
      state.sortedCards = state.cards;
      return;
    }
    state.sortedCards = state.cards.filter((el) => el.type === type);
  },
  setTypes(state, types) {
    state.types = types;
  },
  getCardsStart(state) {
    state.isLoading = true;
  },
  getCardsSuccess(state, payload) {
    state.isLoading = false;
    state.cards = payload.map((el) => ({
      ...el,
      isVisible: false,
      creationDate: dateFormat(
        new Date(el.creationDate),
        // eslint-disable-next-line comma-dangle
        'dd.mm.yyyy hh:mm:ss'
      ),
    }));
    state.cards = state.cards.map((el) => {
      switch (el.type) {
        case 'Pickup':
          el.type = 'Самовывоз';
          break;
        case 'Delivery':
          el.type = 'Курьерская доставка';
          break;
        case 'Pick-point':
          el.type = 'Доставка в пункт выдачи';
          break;
        default:
          return el;
      }
      return el;
    });
  },
  getCardsFailure(state) {
    state.isLoading = false;
  },
};
const actions = {
  getCards({ commit }) {
    return new Promise((resolve) => {
      commit('getCardsStart');
      api
        .getCards()
        .then((response) => {
          commit('getCardsSuccess', response.data);
          resolve('[getCards action] data arrived');
        })
        .catch((result) => {
          commit('getCardsFailure');
          console.log('[getCards action] errors', result.response.errors);
        });
    });
  },
};

const getters = {
  cards(state) {
    return state.cards;
  },
  types(state) {
    return state.types;
  },
  filteredCards(state) {
    if (state.sortedCards.length) {
      return state.sortedCards;
    }
    return state.cards;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
