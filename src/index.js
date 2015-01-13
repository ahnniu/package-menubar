define([
    "src/menuview",
    "less!src/stylesheets/menubar.less"
    ], function(MenuBar) {

        var menuGroups = [
            {
                label: "File",
                items: [
                    {
                        label: "New File",
                        click: function() {
                        }
                    },
                    {
                        label: "New Folder",
                        click: function() {
                        }
                    },
                    {
                        type: "divider"
                    },
                    {
                        label: "Upload",
                        type: "menu",
                        items: [
                            {
                                label: "Files",
                                click: function() {
                                }
                            },
                            {
                                label: "Folder",
                                click: function() {
                                }
                            }
                        ]
                    },
                    {
                        type: "divider"
                    },
                    {
                        label: "Refresh Tree",
                        click: function() {

                        }
                    }
                ]
            },
            {
                label: "View",
                items: [
                    {
                        label: "Pannels",
                        click: function() {
                        }
                    },
                    {
                        label: "New Folder",
                        click: function() {
                        }
                    },
                    {
                        type: "divider"
                    },
                    {
                        label: "Upload",
                        type: "menu",
                        items: [
                            {
                                label: "Files",
                                click: function() {
                                }
                            },
                            {
                                label: "Folder",
                                click: function() {
                                }
                            }
                        ]
                    },
                    {
                        type: "divider"
                    },
                    {
                        label: "Refresh Tree",
                        click: function() {

                        }
                    }
                ]
            },
        ];
        var bar = new MenuBar({
            groups: menuGroups
        });

        bar.appendTo(codebox.app.$el);
        bar.render();
        
});