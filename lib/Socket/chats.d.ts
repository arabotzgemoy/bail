/// <reference types="node" />
import { Boom } from '@hapi/boom';
import { proto } from '../../WAProto';
import { ChatModification, MessageUpsertType, SocketConfig, WABusinessProfile, WAMediaUpload, WAPatchCreate, WAPresence, WAPrivacyOnlineValue, WAPrivacyValue, WAReadReceiptsValue } from '../Types';
import { BinaryNode } from '../WABinary';
import { USyncQuery } from '../WAUSync';
export declare const makeChatsSocket: (config: SocketConfig) => {
    interactiveQuery: (userNodes: BinaryNode[], queryNode: BinaryNode) => Promise<BinaryNode[]>;
    processingMutex: {
        mutex<T>(code: () => T | Promise<T>): Promise<T>;
    };
    fetchPrivacySettings: (force?: boolean) => Promise<{
        [_: string]: string;
    }>;
    upsertMessage: (msg: proto.IWebMessageInfo, type: MessageUpsertType) => Promise<void>;
    appPatch: (patchCreate: WAPatchCreate) => Promise<void>;
    fetchUserLid: (jid: string) => Promise<string | undefined>;
    sendPresenceUpdate: (type: WAPresence, toJid?: string) => Promise<void>;
    presenceSubscribe: (toJid: string, tcToken?: Buffer) => Promise<void>;
    onWhatsApp: (...jids: string[]) => Promise<{
        jid: string;
        exists: unknown;
    }[] | undefined>;
    fetchBlocklist: () => Promise<string[]>;
    fetchStatus: (...jids: string[]) => Promise<import("../WAUSync").USyncQueryResultList[] | undefined>;
    fetchDisappearingDuration: (...jids: string[]) => Promise<import("../WAUSync").USyncQueryResultList[] | undefined>;
    updateProfilePicture: (jid: string, content: WAMediaUpload) => Promise<void>;
    removeProfilePicture: (jid: string) => Promise<void>;
    updateProfileStatus: (status: string) => Promise<void>;
    updateProfileName: (name: string) => Promise<void>;
    updateBlockStatus: (jid: string, action: 'block' | 'unblock') => Promise<void>;
    updateLastSeenPrivacy: (value: WAPrivacyValue) => Promise<void>;
    updateOnlinePrivacy: (value: WAPrivacyOnlineValue) => Promise<void>;
    updateProfilePicturePrivacy: (value: WAPrivacyValue) => Promise<void>;
    updateStatusPrivacy: (value: WAPrivacyValue) => Promise<void>;
    updateReadReceiptsPrivacy: (value: WAReadReceiptsValue) => Promise<void>;
    updateGroupsAddPrivacy: (value: WAPrivacyValue) => Promise<void>;
    updateDefaultDisappearingMode: (duration: number) => Promise<void>;
    getBusinessProfile: (jid: string) => Promise<WABusinessProfile | void>;
    resyncAppState: (collections: readonly ("critical_block" | "critical_unblock_low" | "regular_high" | "regular_low" | "regular")[], isInitialSync: boolean) => Promise<void>;
    chatModify: (mod: ChatModification, jid: string) => Promise<void>;
    cleanDirtyBits: (type: 'account_sync' | 'groups', fromTimestamp?: number | string) => Promise<void>;
    addChatLabel: (jid: string, labelId: string) => Promise<void>;
    removeChatLabel: (jid: string, labelId: string) => Promise<void>;
    addMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    removeMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    star: (jid: string, messages: {
        id: string;
        fromMe?: boolean;
    }[], star: boolean) => Promise<void>;
    executeUSyncQuery: (usyncQuery: USyncQuery) => Promise<import("../WAUSync").USyncQueryResult | undefined>;
    type: "md";
    ws: any;
    ev: import("../Types").BaileysEventEmitter & {
        process(handler: (events: Partial<import("../Types").BaileysEventMap>) => void | Promise<void>): () => void;
        buffer(): void;
        createBufferedFunction<A extends any[], T_1>(work: (...args: A) => Promise<T_1>): (...args: A) => Promise<T_1>;
        flush(force?: boolean | undefined): boolean;
        isBuffering(): boolean;
    };
    authState: {
        creds: import("../Types").AuthenticationCreds;
        keys: import("../Types").SignalKeyStoreWithTransaction;
    };
    signalRepository: import("../Types").SignalRepository;
    user: import("../Types").Contact | undefined;
    generateMessageTag: () => string;
    query: (node: BinaryNode, timeoutMs?: number | undefined) => Promise<BinaryNode>;
    waitForMessage: <T_2>(msgId: string, timeoutMs?: number | undefined) => Promise<T_2>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: BinaryNode) => Promise<void>;
    logout: (msg?: string | undefined) => Promise<void>;
    end: (error: Error | undefined) => void;
    onUnexpectedError: (err: Error | Boom<any>, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    requestPairingCode: (phoneNumber: string, pairCode: string) => Promise<string>;
    waitForConnectionUpdate: (check: (u: Partial<import("../Types").ConnectionState>) => boolean | undefined, timeoutMs?: number | undefined) => Promise<void>;
    sendWAMBuffer: (wamBuffer: Buffer) => Promise<BinaryNode>;
};
