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

    return {
      createdEvents: {
        relation: Model.HasManyRelation,
        modelClass: Event,
        join: {
          from: 'users.id',
          to: 'events.userId'
        }
      },

      joinedEvents: {
        relation: Model.ManyToManyRelation,
        modelClass: Event,
        join: {
          from: 'users.id',
          through: {
            from: 'event_attendees.userId',
            to: 'event_attendees.eventId',
          },
          to: 'events.id'
        }
      }
    }
  }
}

module.exports = User
