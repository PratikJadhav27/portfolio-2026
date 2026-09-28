'use client'

import { motion } from 'framer-motion'
import { Brain, Layers, Server, TrendingUp, Cpu, Database } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'LLM Agents & GenAI',
      description: 'Building production LLM agents with DSPy/LangGraph, evaluation/observability, and ReAct/tool-calling workflows',
      color: 'from-primary-500 to-primary-600',
      glow: 'shadow-primary-500/20',
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Distributed AI Backends',
      description: 'FastAPI, Celery, RabbitMQ, Redis Streams — async, high-throughput AI pipelines with WebSocket streaming',
      color: 'from-accent-500 to-accent-600',
      glow: 'shadow-accent-500/20',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Multimodal & Computer Vision',
      description: 'MTCNN, InceptionResnetV1, RF-DETR, hybrid vision-LLM systems for manufacturing, events & satellite imagery',
      color: 'from-secondary-500 to-secondary-600',
      glow: 'shadow-secondary-500/20',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'LLMOps & MLOps',
      description: 'MLflow, Langfuse, Prometheus, Grafana, Docker, Vertex AI — evaluation, tracing, and telemetry at scale',
      color: 'from-green-500 to-emerald-600',
      glow: 'shadow-green-500/20',
    },
  ]

  const metrics = [
    { icon: <TrendingUp className="w-5 h-5" />, value: '77%', label: 'Agent latency reduced (18s to 4.2s) in production LLM pipeline' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '34% to 92%', label: 'Accuracy improvement in computer-vision defect detection' },
    { icon: <Database className="w-5 h-5" />, value: '50K+', label: 'Profiles in AI professional-discovery retrieval system' },
  ]

  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <Brain className="w-4 h-4" />
            About Me
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Building Production
            <span className="gradient-text"> AI Systems</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            AI/ML Engineer building production LLM agents, multimodal AI systems, and evaluation/observability infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-6">Professional Summary</h3>
            <div className="space-y-4 text-dark-300 leading-relaxed">
              <p>
                I am an <span className="text-primary-400 font-semibold">AI/ML Engineer</span> specialising in production
                LLM agents, multimodal AI systems, and evaluation/observability infrastructure. I have shipped
                production AI services with <span className="text-secondary-400 font-semibold">FastAPI, Docker, GCP/Vertex AI, and MLflow</span>.
              </p>
              <p>
                My expertise spans <span className="text-accent-400 font-semibold">end-to-end AI system architecture</span> —
                from fine-tuning models with LoRA/PEFT and building hybrid RAG pipelines (FAISS, BM25, Qdrant, cross-encoder
                reranking) to establishing LLMOps stacks with DSPy, Langfuse, Prometheus, and Redis Streams.
              </p>
              <p>
                I thrive on hard engineering challenges, whether reducing agent latency by{' '}
                <span className="text-green-400 font-semibold">77%</span> through parallel retrieval and deterministic
                ranking, or improving defect detection from{' '}
                <span className="text-green-400 font-semibold">34% to 92%</span> with a hybrid vision-LLM ensemble.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-800/60 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/15 border border-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                    {metric.icon}
                  </div>
                  <div>
                    <span className="font-heading font-bold text-white text-lg block leading-none mb-1">{metric.value}</span>
                    <span className="text-dark-400 text-sm leading-tight block">{metric.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`p-5 rounded-2xl bg-dark-800/60 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default shadow-lg ${item.glow}`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <h4 className="font-heading font-semibold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-dark-400 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
