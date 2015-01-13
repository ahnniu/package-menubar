define([], function() {

    var _ = codebox.require("hr/utils");
    var $ = codebox.require("hr/dom");
    var hr = codebox.require("hr/hr");

    var MenuBarView = hr.View.extend({
        className: "component-menubar",
        defaults: {
        },
        events: {},

        initialize: function() {
            MenuBarView.__super__.initialize.apply(this, arguments);
        },

        render: function() {
            this.$el.empty();

            var $groups = $("<ul>", {
                'class': "menu-groups"
            });
            var groups = this.options.groups;
            for(var i = 0; i < groups.length; i++) {
                var $group = this.renderGroup(groups[i]);
                $group.appendTo($groups);
            }
            $groups.appendTo(this.$el);

            return this.ready();
        },

        renderGroup: function(group) {
            group = _.defaults(group, {
                'label': "",
                'items': [],
                'click': function() { }
            });

            var $group = $("<li>", {
                'class': "menu-group"
            });

            var $button = $("<button>", {
                'class': "btn dropdown-toggle",
                'text': group.label,
                'click': function() {
                    $button.addClass("open");
                    var $menu = $(".menu");
                    $menu.show();

                }
            });

            $button.appendTo($group);

            var $menu = this.renderMenu(group.items || []);
            $menu.appendTo($group);

            return $group;

        },

        renderMenu: function(items) {
            var $menu = $("<ul>", {
                'class': "menu"
            });

            var $items = _.map(items, this.renderItem, this);
            $menu.append($items);

            return $menu;
        },

        renderItem: function(item) {
            var that = this;

            item = _.defaults(item, {
                'type': "normal",
                'label': "",
                'click': function() { }
            });


            var $item = $("<li>", {
                'class': "menu-item type-"+item.type
            });
            var $label = $("<span>", {
                'class': 'item-label',
                'text': item.label,
                'click': function(e) {
                    e.preventDefault();
                    that.trigger("action");
                    item.click();
                }
            });

            // Add label
            if (item.type != "divider") $label.appendTo($item);

            // Submenu
            if (item.type == "menu") {
                var $menu = this.renderMenu(item.items || []);
                $menu.appendTo($item);
            }

            return $item;
        }
    });

    return MenuBarView;
});