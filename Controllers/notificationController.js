const { Notification, User } = require('../models');

// Send a notification
exports.sendNotification = async (req, res) => {
    const { userId, message } = req.body;

    if (!userId || !message) {
        return res.status(400).json({ error: 'userId and message are required' });
    }

    try {
        const newNotification = await Notification.create({
            userId,
            message,
            sentDate: new Date()
        });

        res.status(201).json({
            success: true,
            message: 'Notification sent successfully',
            data: newNotification
        });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(500).json({ error: 'Failed to send notification' });
    }
};

// Get all notifications for a user
exports.getUserNotifications = async (req, res) => {
    const { userId } = req.params;

    try {
        const notifications = await Notification.findAll({
            where: { userId },
            order: [['sentDate', 'DESC']]
        });
        res.json({ success: true, data: notifications });
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ error: 'Failed to fetch notifications' });
    }
};

// Mark notification as read
exports.markAsRead = async (req, res) => {
    const { id } = req.params;
    try {
        const notification = await Notification.findByPk(id);
        if (!notification) {
            return res.status(404).json({ error: 'Notification not found' });
        }
        notification.read = true;
        await notification.save();
        res.json({ success: true, message: 'Notification marked as read', data: notification });
    } catch (error) {
        console.error('Error marking notification as read:', error);
        res.status(500).json({ error: 'Failed to mark notification as read' });
    }
};
