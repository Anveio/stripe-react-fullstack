import * as React from 'react';
import { Layout, Banner } from '@shopify/polaris';

interface Props {
  notifications: NotificationsState;
  onDismiss: () => void;
}

export default ({ notifications, onDismiss }: Props) => {
  const notificationsMarkup = () => {
    const serverNotifications = notifications.fromServer;
    return serverNotifications.map((notification, i) => {
      const { status, title, message, secondaryAction } = notification;

      return (
        <Banner
          status={status}
          title={title}
          secondaryAction={secondaryAction}
          onDismiss={onDismiss}
          key={i}
        >
          <p>{message}</p>
        </Banner>
      );
    });
  };

  return <Layout.Section>{notificationsMarkup()}</Layout.Section>;
};
