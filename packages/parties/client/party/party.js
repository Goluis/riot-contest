import './party.html';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Summoners } from 'meteor/app:collections';
import Summoner from '../summoner';
import Format from './format';

Template.party.onCreated(function () {
  this.subscribe('party', FlowRouter.getParam('_id'), () => {
    if (!Summoner.party()._id) {
      console.log('the party does not exist, you have been redirected to the main page');
      FlowRouter.go('/');
    }
  });
});

Template.party.helpers({
  summoners (side) {
    const party = Summoner.party({summoners: 1});
    side = Number(side);

    return party.summoners && _.where(party.summoners, {side});
  },
  summoner () {
    const id = this.id;
    const summoner = Summoners.findOne({id}) || this;
    const champions = Summoner.party({champions: 1}).champions;
    
    if (champions) {
      let {champion} = _.findWhere(champions, {id}) || {};
      if (champion) {
        // this way does not replace the summoner name
        champion.championName = champion.name;
        delete champion.name;

        _.extend(summoner, champion);
      }
    }
    return summoner;
  },
  championPoints () {
    return Format(this.championPoints, 0, 3, '.', ',');
  },
  loggedOut () {
    return !Summoner.get();
  },
  errorMessage () {
    return Summoner.errors.get('joinParty');
  }
});

Template.party.events({
  'submit #join' (e, instance) {
    e.preventDefault();

    Summoner.join(instance.find('#name').value);
  },
  'click #demacia' () {
    Meteor.call('parties.chooseSide', {
      partyId: FlowRouter.getParam('_id'),
      side: 1
    });
  },
  'click #noxus' () {
    Meteor.call('parties.chooseSide', {
      partyId: FlowRouter.getParam('_id'),
      side: 2
    });
  }
});