import './party_header.html';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Summoner from '../../summoner.js';
import Clipboard from 'clipboard';

Template.partyHeader.onRendered(function () {
  new Clipboard('.copy');
});

Template.partyHeader.helpers({
  baseUrl () {
    return window.location.origin || 'https://versus.lol';
  },
  partyId () {
    return FlowRouter.getParam('_id');
  },
  isOwner () {
    const {id} = Summoner.me({id: 1}) || {};
    return id && Summoner.party({owner: 1}).owner === id;
  }
});

Template.partyHeader.events({
  'submit' (e, instance) {
    e.preventDefault();

    const value = instance.find('.select-mastery').value;
    const levels = [];

    for (let level of value) {
      levels.push(Number(level));
    }

    const data = {
      partyId: FlowRouter.getParam('_id'),
      levels
    };

    Meteor.call('parties.roll', data, error => {
      if (error)
        console.log(error);
    });
  }
});