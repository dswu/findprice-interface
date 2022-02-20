declare namespace API {
  type DiscordMessageComponentInsideComponent = {
    type?: number;
    label?: string;
    style?: number;
    custom_id?: string;
    url?: string;
    disabled?: boolean;
    placeholder?: string;
    min_values?: number;
    max_values?: number;
  };

  type v1ConnectionGithubPayLoad = {
    code?: string;
    state?: string;
  };

  type v1ConnectionGithubResponse = {
    success?: boolean;
  };

  type v1DiscordGuildMember = {
    user?: v1DiscordUser;
    nick?: string;
    avatar?: string;
    roles?: string[];
    joined_at?: string;
    premium_since?: string;
    deaf?: boolean;
    mute?: boolean;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: string;
  };

  type v1DiscordMessage = {
    id?: string;
    channel_id?: string;
    guild_id?: string;
    user?: v1DiscordUser;
    member?: v1DiscordGuildMember;
    content?: string;
    timestamp?: string;
    edited_timestamp?: string;
    tts?: boolean;
  };

  type v1DiscordMessageComponent = {
    type?: v1DiscordMessageComponentType;
    components?: DiscordMessageComponentInsideComponent[];
  };

  type v1DiscordMessageComponentType = 'c' | 'ACTION_ROW' | 'BUTTON' | 'SELECT_MENU' | 'TEXT_INPUT';

  type v1DiscordMessageEmbed = {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: number;
  };

  type v1DiscordUser = {
    id?: string;
    username?: string;
    discriminator?: string;
    avatar?: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banner?: string;
    email?: string;
  };

  type v1InteractionsCallbackData = {
    tts?: boolean;
    content?: string;
    embeds?: v1DiscordMessageEmbed[];
    flags?: number;
    components?: v1DiscordMessageComponent[];
  };

  type v1InteractionsCallbackType =
    | 'b'
    | 'PONG'
    | 'CHANNEL_MESSAGE_WITH_SOURCE'
    | 'DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE'
    | 'DEFERRED_UPDATE_MESSAGE'
    | 'UPDATE_MESSAGE'
    | 'APPLICATION_COMMAND_AUTOCOMPLETE_RESULT'
    | 'MODAL';

  type v1InteractionsData = {
    id?: string;
    name?: string;
    type?: number;
    resolved?: v1InteractionsResolved;
    custom_id?: string;
    component_type?: v1DiscordMessageComponentType;
    target_id?: string;
    components?: v1DiscordMessageComponent[];
  };

  type v1InteractionsPayLoad = {
    id?: string;
    application_id?: string;
    type?: v1InteractionsType;
    data?: v1InteractionsData;
    guild_id?: string;
    channel_id?: string;
    member?: v1DiscordGuildMember;
    user?: v1DiscordUser;
    token?: string;
    version?: number;
    message?: v1DiscordMessage;
    locale?: string;
    guild_locale?: string;
  };

  type v1InteractionsResolved = true;

  type v1InteractionsResponse = {
    type?: v1InteractionsCallbackType;
    data?: v1InteractionsCallbackData;
  };

  type v1InteractionsType =
    | 'a'
    | 'PING'
    | 'APPLICATION_COMMAND'
    | 'MESSAGE_COMPONENT'
    | 'APPLICATION_COMMAND_AUTOCOMPLETE'
    | 'MODAL_SUBMIT';
}
