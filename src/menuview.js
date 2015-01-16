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

        closeMenu: function() {
            $(".menu.show").removeClass("show");
            $(".btn.open").removeClass("open");

        },

        renderGroup: function(group) {

            var that = this;
            group = _.defaults(group, {
                'label': "",
                'items': [],
                'click': function() { }
            });

            var $group = $("<li>", {
                'class': "menu-group"
            });

            var $button = $("<button>", {
                'class': "btn",
                'text': group.label,
                'click': function() {
                    var open = $button.hasClass("open");

                    // close all menu
                    that.closeMenu();

                    if(!open) {
                        $button.addClass("open");
                        var $menu = $button.siblings();
                        $menu.addClass('show');
                    }
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
                'icon': "sign-blank",
                'click': function() { }
            });


            var $item = $("<li>", {
                'class': "menu-item type-"+item.type
            });
            var $label = $("<span>", {
                'class': "item-label",
                'text': item.label,
                'click': function(e) {
                    if(item.type != "menu") {
                        that.closeMenu();
                    }
                    e.preventDefault();
                    that.trigger("action");
                    item.click();
                }
            });

            var $icon = $("<i>", {
                'class': "menu-icon fa fa-" + item.icon
            });

            $icon.prependTo($label);


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