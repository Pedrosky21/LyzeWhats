export interface AnalysisData {
  status: string;
  messages: number;
  analysis: {
    messages_by_sender: Record<string, number>;
    top_emoji: Record<string, number>;
    conversation_starts: Record<string, number>;
    saludos: {
      buenos_dias_total: number;
      hasta_mañana_total: number;
      buenos_dias_por_persona: Record<string, number>;
      hasta_mañana_por_persona: Record<string, number>;
    };
    te_amo: {
      total_te_amo: number;
      te_amo_by_sender: Record<string, number>;
    };
    conversation_duration: {
      average_duration_minutes: number;
      conversations_count: number;
    };
    top_phrases: Record<string, number>;
  };
}
