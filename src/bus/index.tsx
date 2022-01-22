// Core
import React, { FC } from 'react';

// Providers
import { TogglersProvider } from './client/togglers';
import { KeyboardProvider } from './client/keyboard';
import { DeleteProvider } from './client/delete';
import { EditProvider } from './client/edit';
import { ErrorsProvider } from './client/errors';
import { InputProvider } from './client/input';
import { UserProvider } from './user';
import { MessagesProvider } from './messages';

export const RootProvider: FC = ({ children }) => {
    return (
        <TogglersProvider>
            <ErrorsProvider>
                <EditProvider>
                    <DeleteProvider>
                        <InputProvider>
                            <KeyboardProvider>
                                <UserProvider>
                                    <MessagesProvider>
                                        {children}
                                    </MessagesProvider>
                                </UserProvider>
                            </KeyboardProvider>
                        </InputProvider>
                    </DeleteProvider>
                </EditProvider>
            </ErrorsProvider>
        </TogglersProvider>
    );
};
