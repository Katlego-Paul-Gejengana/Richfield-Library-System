const express = require('express');
const router = express.Router();
const notificationController = require('../Controllers/notificationController');

// POST → send new notification
router.post('/', notificationController.sendNotification);

// GET → get all notifications for a user
router.get('/:userId', notificationController.getUserNotifications);

// PUT → mark notification as read
router.put('/:id/read', notificationController.markAsRead);

module.exports = router;
