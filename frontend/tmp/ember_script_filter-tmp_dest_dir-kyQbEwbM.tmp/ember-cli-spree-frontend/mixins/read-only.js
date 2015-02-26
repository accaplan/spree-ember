// Generated by EmberScript 0.0.14
var ReadOnly;
var get$ = Ember.get;
var set$ = Ember.set;
ReadOnly = Ember.Mixin.create({
  serialize: function (record, options) {
    var json;
    json = get$(this, '_super').apply(this, arguments);
    record.eachAttribute(function (name, meta) {
      if (get$(get$(meta, 'options'), 'readOnly'))
        return delete json[name];
    });
    return json;
  }
});
export default ReadOnly;