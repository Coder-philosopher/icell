export {};

declare global {
  interface Window {
    openTeamModal: (() => void) | undefined;
    openEventsModal: (() => void) | undefined;
  }
}