import * as React from 'react';
import { Layout, Banner } from '@shopify/polaris';

export default (notifications: NotificationsState) => {
  const notificationsMarkup = () => {
    const serverNotifications = notifications.fromServer;
    return serverNotifications.map((notification, i) => {
      const {
        status,
        title,
        message,
        onDismiss,
        secondaryAction
      } = notification;

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

  return notifications
    ? <Layout.Section>{notificationsMarkup()}</Layout.Section>
    : <p>Nothing here.</p>;
};
