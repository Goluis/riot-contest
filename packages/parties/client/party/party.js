import './party.html';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Summoners } from 'meteor/app:collections';
import Summoner from '../summoner';

Template.party.onCreated(function () {
  this.subscribe('party', FlowRouter.getParam('_id'));
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
      let champion = _.findWhere(champions, {id});
      if (champion)
        _.extend(summoner, champion.champion);
    }
    return summoner;
  },
  loggedOut () {
    return !Summoner.get();
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