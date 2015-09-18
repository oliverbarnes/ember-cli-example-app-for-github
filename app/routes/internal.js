import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    var me = this.store.find('me', { singleton: true });

    //in real app, there's other models being
    //returned together with Me in an RSVP hash
    return Ember.RSVP.hash({
      me: me
    });
  }
});
