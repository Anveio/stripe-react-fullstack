import * as React from 'react';
import { Layout, Banner } from '@shopify/polaris';

interface Props {
  notifications: NotificationsState;
  onDismiss: (message: string) => void;
}

export default ({ notifications, onDismiss }: Props) => {
  const notificationsMarkup = () => {
    const serverNotifications = notifications.fromServer;
    return serverNotifications.map((notification, index) => {
      const { status, title, message } = notification;
      const handleDismiss = () => {
        onDismiss(message);
      };
      return (
        <Banner
          status={status}
          title={title}
          onDismiss={handleDismiss}
          key={index}
        >
          <p>{message}</p>
        </Banner>
      );
    });
  };

  return <Layout.Section>{notificationsMarkup()}</Layout.Section>;
};
