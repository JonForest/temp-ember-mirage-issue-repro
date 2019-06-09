import DS from 'ember-data';
const { Model, attr } = DS;

export default class TaskModel extends Model {
  @attr('string') description;
  @attr('string') detail;
  @attr('date') target;
  @attr('date') completedAt;
}
