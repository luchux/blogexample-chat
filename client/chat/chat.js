Template.Chat.events({
    'click #submit': function(evt, template) {

        evt.preventDefault();

        var message = template.find('#linechat').value

        Messages.insert({
            "user": Meteor.user().emails[0].address,
            "message": message,
            "date": Date.now()
        })
    }
})

Template.Chat.helpers({
    'messages': function() {
        return Messages.find({})
    },

    'date': function () {
        return moment(this.date).from(Date.now())
    }
})