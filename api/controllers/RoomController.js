/**
 * RoomController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/room/talkingspot`
   */
  talkingspot: function (req, res) {
    res.view({id:req.param('id')});
    // Send a JSON response
/*    return res.json({
      hello: 'world'
    });*/
  },

  checkin: function(req, res) {
    User.subscribe(req.socket);
　　 Chat.subscribe(req.socket); //Chatの更新を通知するためにsubscribeを追加
    User.publishCreate({id:req.param('userID')});
  },
 

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to RoomController)
   */
  _config: {}

  
};
