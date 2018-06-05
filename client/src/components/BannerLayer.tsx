import * as React from 'react';
import { Banner } from '@shopify/polaris';
import { NotificationsState, RootState } from 'types';
import { Dispatch, connect } from 'react-redux';
import {
  DismissNotification,
  dismissNotification
} from 'actions/notifications';

interface Props {
  notifications: NotificationsState;
}

interface Handlers {
  onDismiss: (message: string) => void;
}

const BannerLayer = ({ notifications, onDismiss }: Props & Handlers) => {
  const notificationsMarkup = () => {
    const serverNotifications = notifications.fromServer;
    return serverNotifications.map((notification, index) => {
      const { status, title, message } = notification;
      return (
        <Banner
          status={status}
          title={title}
          key={index}
        >
          <p>{message}</p>
        </Banner>
      );
    });
  };

  return <>{notificationsMarkup()}</>;
};

const mapState = (state: RootState): Props => ({
  notifications: state.notifications
});

const mapDispatch = (dispatch: Dispatch<DismissNotification>): Handlers => ({
  onDismiss: (message: string) => {
    dispatch(dismissNotification(message));
  }
});

export default connect(mapState, mapDispatch)(BannerLayer);
