// import { EventSourceParserStream } from 'eventsource-parser/stream';

export async function* parseSSEStream(stream) {
  const sseStream = stream
    .pipeThrough(new TextDecoderStream())
    // .pipeThrough(new EventSourceParserStream())
  for await (const chunk of sseStream) {
    yield chunk;
  }
}