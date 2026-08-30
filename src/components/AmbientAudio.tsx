import React, { useEffect, useRef } from 'react';

interface AmbientAudioProps {
  isPlaying: boolean;
}

export const AmbientAudio: React.FC<AmbientAudioProps> = ({ isPlaying }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContextClass();
        }

        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Create pink noise generator for gentle rain / cafe whisper
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Gentle low pass filter for warm rain/wind in forest
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(masterGain);
        whiteNoise.start();

        // Subtle gentle acoustic chord tones every 6 seconds
        const notes = [220, 261.63, 329.63, 392.00, 440]; // A Minor Pentatonic / Relaxing vibe
        const playGentleTone = () => {
          if (!isPlaying || !audioCtxRef.current) return;
          const osc = ctx.createOscillator();
          const toneGain = ctx.createGain();
          const note = notes[Math.floor(Math.random() * notes.length)];
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(note, ctx.currentTime);

          toneGain.gain.setValueAtTime(0, ctx.currentTime);
          toneGain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 1.2);
          toneGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);

          osc.connect(toneGain);
          toneGain.connect(masterGain);

          osc.start();
          osc.stop(ctx.currentTime + 5);
        };

        playGentleTone();
        intervalRef.current = window.setInterval(playGentleTone, 5500);

        return () => {
          whiteNoise.stop();
          whiteNoise.disconnect();
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
      } catch (err) {
        console.log('Audio init prevented by browser policy until gesture.');
      }
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
    }
  }, [isPlaying]);

  return null;
};
