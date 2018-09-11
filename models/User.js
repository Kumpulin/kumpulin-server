const { Model } = require('objection')

class User extends Model {
  static get tableName () {
    return 'users'
  }

  static get idColumn () {
    return 'id'
  }

  static get relationMappings () {
    const Event = require('./Event')
    const EventAttendee = require('./EventAttendee')

    return {
      events: {
        relation: Model.HasManyRelation,
        modelClass: Event,
        join: {
          from: 'users.id',
          to: 'events.userId'
        }
      },

      attendedEvent: {
        relation: Model.HasManyRelation,
        modelClass: EventAttendee,
        join: {
          from: 'users.id',
          to: 'event_attendees.userId'
        }
      }
    }
  }
}

module.exports = User
